import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Loader2, Bot, User } from "lucide-react";

const PERSONAL_CONTEXT = `
You are BangerBot, a focused AI assistant representing Saransh Bangar. Keep responses concise, informative, and personable.

CORE DIRECTIVES:
1. Only discuss Saransh's professional background, projects, and skills
2. Maintain a friendly, confident tone
3. Use bullet points for clarity
4. Keep responses under 3 paragraphs
5. If unsure or off-topic, say "I can only discuss Saransh's professional experience and skills."

KEY INFORMATION:

PROFESSIONAL SUMMARY:
- Software Developer specializing in full-stack web development
- Computer Science undergraduate at SRM Institute of Science and Technology
- Focused on React, Next.js, TypeScript, and cloud technologies
- Open-source contributor and UI/UX enthusiast

SIGNATURE PROJECTS:
1. ZipIt - Digital scholarship management system (Next.js)
   • Streamlined PMSSS application process
   • Enhanced security and user experience

2. PolyGlot - AI language learning platform
   • Real-time language assistance
   • Custom quiz generation
   • Adaptive learning system

3. DevTinder - Developer collaboration platform
   • Full-stack MERN application
   • Real-time matching system
   • Profile-based project matching

TECHNICAL EXPERTISE:
- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express, MongoDB
- Tools: Git, Docker, Razorpay
- Currently Learning: React Native, Vector Databases

ACHIEVEMENTS:
- Created npm library: toast-notify
- 400+ day GeeksforGeeks coding streak
- Computer teaching assistant at Samarth Jyoti Center
- Led network optimization research presentations

PERSONALITY TRAITS:
- Problem-solver
- Continuous learner
- Open-source enthusiast
- UI/UX focused
- Innovation-driven

When answering:
1. Focus on relevant technical details
2. Highlight practical experience
3. Emphasize problem-solving approach
4. Include specific project examples when applicable
`;

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const CustomBot: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
  const genAI = new GoogleGenerativeAI(API_KEY);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newUserMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-002" });

      const fullPrompt = `${PERSONAL_CONTEXT}\n\nUser Question: ${input}`;

      const result = await model.generateContent(fullPrompt);
      const response = result.response.text();

      if (response.toLowerCase().includes("i cannot answer") || response.toLowerCase().includes("outside my scope")) {
        throw new Error("Out of scope");
      }

      const newBotMessage: Message = {
        id: Date.now() + 1,
        text: response,
        sender: "bot",
      };

      setMessages((prev) => [...prev, newBotMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: Date.now() + 2,
        text: "Sorry, I can only answer questions related to Saransh's personal background, career, hobbies, or interests.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm mx-2" onClick={onClose}>
      <Card className="w-full max-w-md h-[600px] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <CardHeader className="flex flex-row items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">Personal AI Assistant</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto p-4">
          {messages.length === 0 && (
            <div className="flex flex-col justify-center items-center h-full">
              <Bot className="w-12 h-12 text-secondary-foreground animate-bounce" />
              <div className="text-center text-lg text-secondary-foreground">Ask me about Saransh's background, career, or projects!</div>
            </div>
          )}
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex items-center ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                {message.sender === "bot" && <Bot className="w-6 h-6 mr-2 text-secondary-foreground" />}
                <div
                  className={`max-w-[80%] px-3 rounded-lg prose dark:prose-invert ${
                    message.sender === "user" ? "bg-primary text-primary-foreground py-2" : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.sender === "bot" ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className="markdown-content">
                      {message.text}
                    </ReactMarkdown>
                  ) : (
                    message.text
                  )}
                </div>
                {message.sender === "user" && <User className="w-6 h-6 ml-2 text-secondary-foreground" />}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start items-center">
                <Bot className="w-6 h-6 mr-2 text-secondary-foreground" />
                <div className="p-3 rounded-lg bg-secondary text-secondary-foreground flex items-center">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>

        <CardFooter className="border-t p-4">
          <div className="flex w-full space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about my background..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button onClick={sendMessage} disabled={isLoading || input.trim() === ""} size="icon">
              {isLoading ? <Send className="h-4 w-4" aria-disabled /> : <Send className="h-4 w-4" />}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomBot;
