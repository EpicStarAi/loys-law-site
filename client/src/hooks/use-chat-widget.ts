import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import type { Locale } from "@/i18n/translations";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Conversation {
  id: number;
  title: string;
}

const greetings = {
  uk: "Вітаю. Я AI-асистент адвокатського об'єднання «Яремчук і Седун». Коротко опишіть вашу правову ситуацію, і я надам попередню консультацію.",
  en: "Hello. I am the AI assistant of the law firm 'Yaremchuk & Sedun'. Briefly describe your legal situation, and I will provide a preliminary consultation.",
};

const errorMessages = {
  uk: "Вибачте, виникли проблеми зі з'єднанням. Спробуйте ще раз або зателефонуйте напряму до нашого офісу.",
  en: "Sorry, there was a connection problem. Please try again or call our office directly.",
};

export function useChatWidget(locale: Locale = "uk") {
  const [isOpen, setIsOpen] = useState(false);
  const [activeConversationId, setActiveConversationId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  useEffect(() => {
    if (locale !== currentLocale && messages.length > 0) {
      setCurrentLocale(locale);
    }
  }, [locale, currentLocale, messages.length]);

  const createConversationMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/conversations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: locale === "uk" ? "Юридична консультація" : "Legal Consultation" }),
      });
      if (!res.ok) throw new Error("Failed to start chat");
      return await res.json();
    },
    onSuccess: (data: Conversation) => {
      setActiveConversationId(data.id);
      setCurrentLocale(locale);
      setMessages([{ role: "assistant", content: greetings[locale] }]);
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
        body: JSON.stringify({ content, language: locale }),
      });

      if (!response.ok) throw new Error("Failed to send message");
      if (!response.body) throw new Error("No response body");

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
              console.error("Error parsing SSE data", e);
            }
          }
        }
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "assistant", content: errorMessages[locale] }]);
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
