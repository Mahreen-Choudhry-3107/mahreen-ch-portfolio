'use client';

import { useState, useRef, useEffect } from 'react';
import { aiKnowledge } from '@/data/portfolio';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

function getAIResponse(input: string): string {
  const lower = input.toLowerCase().trim();

  for (const faq of aiKnowledge.faqs) {
    if (faq.keywords.some((kw) => lower.includes(kw))) {
      return faq.answer;
    }
  }

  if (lower.length <= 3) {
    return "Hey! Feel free to ask me anything about Mahreen — her skills, projects, experience, or how to reach her!";
  }

  return "Hmm, I'm not quite sure about that one. But I'd love to help! Try asking about Mahreen's skills, projects, experience, or how to reach her!";
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowPopup(false);
      if (messages.length === 0) {
        setMessages([{ role: 'ai', text: "Hey there! I'm Mahreen's AI assistant. Ask me anything about her skills, projects, or experience!" }]);
      }
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      const response = getAIResponse(userMsg);
      setMessages((prev) => [...prev, { role: 'ai', text: response }]);
    }, 500);
  };

  return (
    <>
      {showPopup && !isOpen && (
        <div className="fixed bottom-24 right-6 z-[200] bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 shadow-2xl max-w-[220px] chat-msg">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-1 right-2 text-gray-500 hover:text-white text-xs cursor-pointer bg-transparent border-none"
          >
            ✕
          </button>
          <p className="text-sm text-gray-300 pr-3">Hey! Need help exploring my work?</p>
          <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-[#0a0a0a] border-r border-b border-white/10 rotate-45" />
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full overflow-hidden shadow-lg flex items-center justify-center transition-all hover:scale-110 cursor-pointer border-none chat-glow"
        aria-label="Toggle AI Chat"
      >
        {isOpen ? '✕' : <img src="/chatbot.jpeg" alt="Chat" className="w-12 h-12 rounded-full object-cover" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[200] w-[360px] max-w-[calc(100vw-3rem)] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10 bg-accent/5">
            <div className="flex items-center gap-2">
              <img src="/chatbot.jpeg" alt="AI" className="w-7 h-7 rounded-full object-cover" />
              <div>
                <h4 className="text-sm font-bold text-white">Mahreen&apos;s AI</h4>
                <p className="text-[11px] text-gray-500">Ask me anything about Mahreen</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3 max-h-[320px] min-h-[200px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-msg max-w-[85%] px-4 py-2.5 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'bg-accent/10 text-white self-end rounded-br-sm'
                    : 'bg-white/[0.05] text-gray-300 self-start rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-4 py-3 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Mahreen..."
              className="flex-1 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm outline-none transition-colors focus:border-accent"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2.5 rounded-lg bg-accent text-black text-sm font-semibold cursor-pointer border-none transition-all hover:bg-accent-hover"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
