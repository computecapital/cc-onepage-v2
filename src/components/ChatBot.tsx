import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou Amanda, sua assistente virtual da Compute Capital. Como posso ajudá-lo hoje?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const amandaResponses = [
    "Ótima pergunta! A Compute Capital tem três verticais principais: Investimentos, C2 AI Studio para soluções em IA, e Solar Recife para energia renovável.",
    "Nosso fundo de investimentos foca em startups de tecnologia disruptiva. Procuramos empresas com potencial de transformar mercados.",
    "O C2 AI Studio desenvolve soluções personalizadas em inteligência artificial para empresas de diversos setores.",
    "A Solar Recife oferece sistemas de energia solar fotovoltaica para residências e empresas em Pernambuco.",
    "Estamos sempre em busca de oportunidades inovadoras. Gostaria de saber mais sobre alguma área específica?",
    "Posso conectá-lo com nossa equipe especializada. Que tipo de parceria ou investimento você tem em mente?"
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simula delay da IA
    setTimeout(() => {
      const randomResponse = amandaResponses[Math.floor(Math.random() * amandaResponses.length)];
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 glass p-4 rounded-full group hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ backdropFilter: 'blur(32px)' }}
      >
        <div className="flex items-center gap-3">
          {/* Avatar Amanda */}
          <div className="w-12 h-12 bg-gradient-to-br from-[#18e492] to-[#18d2e4] rounded-full flex items-center justify-center relative">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {/* Online indicator */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#18e492] rounded-full border-2 border-black animate-pulse"></div>
          </div>
          
          {/* Text */}
          <div className="hidden lg:block text-left">
            <p className="text-white font-semibold text-sm font-[DM_Sans]">Fale com Amanda</p>
            <p className="text-white/70 text-xs font-[DM_Sans]">IA • Online agora</p>
          </div>
        </div>
        
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#18e492]/20 via-[#18d2e4]/20 to-[#f48101]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-6 right-6 w-96 h-[500px] glass rounded-2xl z-50 flex flex-col overflow-hidden"
              style={{ backdropFilter: 'blur(32px)' }}
            >
              {/* Header */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#18e492] to-[#18d2e4] rounded-full flex items-center justify-center relative">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#18e492] rounded-full border border-black/20"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm font-[DM_Sans]">Amanda</h3>
                      <p className="text-white/70 text-xs font-[DM_Sans]">Assistente Virtual</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/60 hover:text-white/90 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.isUser
                          ? 'bg-gradient-to-r from-[#18e492] to-[#18d2e4] text-white'
                          : 'glass text-white border border-white/10'
                      }`}
                    >
                      <p className="text-sm font-[DM_Sans] leading-relaxed">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="glass text-white border border-white/10 rounded-2xl px-4 py-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-[#18d2e4] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-[#18d2e4] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-[#18d2e4] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-end gap-3">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 text-sm font-[DM_Sans] resize-none focus:outline-none focus:border-[#18d2e4]/50 transition-colors"
                    rows={1}
                    style={{ backdropFilter: 'blur(16px)' }}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="w-10 h-10 bg-gradient-to-r from-[#18e492] to-[#18d2e4] rounded-xl flex items-center justify-center text-white hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}