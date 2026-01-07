import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useChatWidget } from "@/hooks/use-chat-widget";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";
import { useI18n } from "@/i18n/I18nProvider";

export function ChatWidget() {
  const { locale, t } = useI18n();
  const { isOpen, toggleChat, messages, sendMessage, isStreaming, isLoading } = useChatWidget(locale);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("message") as HTMLInputElement;
    const content = input.value.trim();
    
    if (content) {
      sendMessage(content);
      input.value = "";
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-background border border-border shadow-2xl flex flex-col overflow-hidden"
              style={{ borderRadius: "0px" }}
            >
              {/* Header */}
              <div className="bg-primary text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <div>
                    <h3 className="font-serif font-medium text-sm">{t.chat.title}</h3>
                    <p className="text-[10px] text-white/60 uppercase tracking-wider">AI {locale === "uk" ? "асистент" : "assistant"}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/10 h-8 w-8" 
                  onClick={toggleChat}
                  data-testid="button-close-chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20 scrollbar-hide">
                {messages.length === 0 && isLoading && (
                  <div className="flex justify-center p-4">
                    <span className="animate-pulse text-xs text-muted-foreground">
                      {locale === "uk" ? "Підключення..." : "Connecting..."}
                    </span>
                  </div>
                )}
                
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex gap-3 max-w-[85%]",
                      msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 flex items-center justify-center shrink-0 border",
                      msg.role === "user" ? "bg-white border-border" : "bg-primary text-white border-primary"
                    )}>
                      {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className={cn(
                      "p-3 text-sm leading-relaxed border",
                      msg.role === "user" 
                        ? "bg-primary text-white border-primary" 
                        : "bg-white text-foreground border-border"
                    )}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isStreaming && (
                  <div className="mr-auto flex gap-3 max-w-[85%]">
                     <div className="w-8 h-8 flex items-center justify-center shrink-0 bg-primary text-white border border-primary">
                       <Bot className="h-4 w-4" />
                     </div>
                     <div className="p-3 bg-white border border-border flex gap-1 items-center h-10">
                       <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                       <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                       <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce"></span>
                     </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border bg-background">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input 
                    name="message" 
                    placeholder={t.chat.placeholder}
                    ref={inputRef}
                    autoComplete="off"
                    className="rounded-none border-0 bg-muted/50 focus-visible:ring-0 focus-visible:bg-white transition-colors"
                    data-testid="input-chat-message"
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    disabled={isStreaming}
                    className="rounded-none w-12 shrink-0"
                    data-testid="button-send-message"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "w-14 h-14 bg-primary text-white flex items-center justify-center shadow-lg transition-colors border border-white/10 hover:bg-primary/90",
            isOpen && "opacity-0 pointer-events-none"
          )}
          data-testid="button-open-chat"
        >
          <MessageCircle className="h-7 w-7" />
        </motion.button>
      </div>
    </>
  );
}
