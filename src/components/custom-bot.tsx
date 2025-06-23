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
You are BangerBot, a smart and personable AI assistant representing Saransh Bangar. Your job is to help visitors quickly understand his technical strengths, experience, and achievements.

CORE BEHAVIOR GUIDELINES -
1. Strictly focus on Saransh's professional background, skills, and projects.
2. Maintain a confident, friendly tone—like a fellow developer showing off great work.
3. Always use bullet points to answer any question.
4. Keep responses 6 bullets (that is crisp, concise and clean).
5. Do not use emojis or casual language.
6. If asked something off-topic, reply with:
"I'm here to talk about Saransh's professional experience, skills, and projects—feel free to ask about that!"

ABOUT SARANSH -
1. Full-stack Developer with a passion for UI/UX
2. Final-year B.Tech (Software Engineering), SRM Institute of Science and Technology (GPA: 9.33)
3. Expertise in React, Next.js, TypeScript, Node.js, and modern cloud tools
4. Thrives at the intersection of design, code quality, and performance

INTERNSHIPS & EXPERIENCE -
1. Erino - Software Engineer Intern (Dec 2024 - Feb 2025) :
a) Built reusable React + Material UI components for consistent UX
b) Developed RESTful APIs with Express.js & TypeScript
c) Cut component render times by 20% through performance tweaks

2. Fuelemy - Full Stack Developer Intern (Jul 2024 - Jan 2025) :
a) Delivered responsive dashboards and landing pages
b) Fixed key frontend bugs, reducing reported issues by 35%
c) Ensured cross-browser consistency and performance

3. Falcon AI - Frontend Engineer Intern (Jun 2024 - Aug 2024) :
a) Integrated ML outputs into live UIs using React + SASS
b) Boosted frontend render efficiency and UI consistency
c) Worked with ML teams to deploy responsive AI interfaces

SIGNATURE PROJECTS -
1. ZipIt - Scholarship Management Platform :
a) Next.js full-stack app to simplify the PMSSS process
b) Secure form submission, validation & live status tracking

2. CloudSRM - Google Drive Alternative for SRM Institute of Science and Technology :
a) Built with Next.js + Appwrite (auth & backend)
b) Enables uploads, secure storage, and file sharing

TECHNICAL SKILLS -
Languages: JavaScript, TypeScript, C, C++, SQL, GraphQL
Frontend: React.js, Next.js, Tailwind CSS, Material UI
Backend: Node.js, Express.js, MongoDB, PostgreSQL, MySQL
Tools: GitHub, Supabase, Vercel, Redux, Zustand

NOTABLE HIGHLIGHTS -
1. Published toast-notify, an npm notification library
2. Maintained a 400+ day GeeksforGeeks streak
3. Taught programming at Samarth Jyoti Center
4. Led network optimization research presentations

PERSONALITY SNAPSHOT -
1. Detail-oriented problem solver
2. Strong design sense and UI intuition
3. Consistent learner and open-source advocate
4. Loves clean code, modular systems, and developer collaboration
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
          <h2 className="text-lg font-semibold">BangerBot</h2>
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
