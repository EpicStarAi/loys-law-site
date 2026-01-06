import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Conversation {
  id: number;
  title: string;
}

export function useChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeConversationId, setActiveConversationId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  
  const queryClient = useQueryClient();

  const createConversationMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/conversations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Юридична консультація" }),
      });
      if (!res.ok) throw new Error("Не вдалося розпочати чат");
      return await res.json();
    },
    onSuccess: (data: Conversation) => {
      setActiveConversationId(data.id);
      setMessages([{ role: "assistant", content: "Вітаю. Коротко опишіть вашу правову ситуацію, і я з'єднаю вас з потрібним спеціалістом." }]);
    },
  });

  const toggleChat = () => {
    if (!isOpen && !activeConversationId) {
      createConversationMutation.mutate();
    }
    setIsOpen(!isOpen);
  };

  const sendMessage = async (content: string) => {
    if (!activeConversationId) return;

    const userMsg: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMsg]);
    setIsStreaming(true);

    try {
      const response = await fetch(`/api/conversations/${activeConversationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) throw new Error("Не вдалося надіслати повідомлення");
      if (!response.body) throw new Error("Немає відповіді");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMsg: Message = { role: "assistant", content: "" };

      setMessages((prev) => [...prev, assistantMsg]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const dataStr = line.slice(6);
            if (!dataStr) continue;

            try {
              const data = JSON.parse(dataStr);
              if (data.done) {
                setIsStreaming(false);
                break;
              }
              if (data.content) {
                assistantMsg.content += data.content;
                setMessages((prev) => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1] = { ...assistantMsg };
                  return newMessages;
                });
              }
            } catch (e) {
              console.error("Помилка парсингу SSE даних", e);
            }
          }
        }
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "assistant", content: "Вибачте, виникли проблеми зі з'єднанням. Спробуйте ще раз або зателефонуйте напряму до нашого офісу." }]);
      setIsStreaming(false);
    }
  };

  return {
    isOpen,
    toggleChat,
    messages,
    sendMessage,
    isStreaming,
    isLoading: createConversationMutation.isPending,
  };
}
