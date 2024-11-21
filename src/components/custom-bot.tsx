import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Loader2, Bot, User } from "lucide-react";

const PERSONAL_CONTEXT = `
You are a personal AI assistant for Saransh Bangar.
Your name is BangerBot. You are designed to provide accurate, concise, and helpful responses. You should only answer questions about:
- Saransh's personal background, career, and professional projects
- His hobbies, interests, and academic journey
- His current learning areas and future aspirations

### Saransh Bangar's Profile
#### Personal Information:
- **Name:** Saransh Bangar
- **Occupation:** Software Developer
- **Location:** India
- **Education:** Computer Science undergraduate student at SRM Institute of Science and Technology

#### Hobbies and Interests:
- Coding and solving complex programming challenges.
- Working on personal and collaborative projects.
- Exploring cutting-edge web development frameworks and tools.
- Passionate about open-source contributions.
- Enthusiastic about clean UI/UX design principles, generative AI, and cloud network optimization.

#### Professional Projects:
1. **ZipIt:**
   - A Next.js-based project that digitizes the PMSSS (Prime Minister's Special Scholarship Scheme) application process.
   - Features include enhanced user experience, secure application management, and seamless navigation.

2. **GPU Dash:**
   - A real-time dashboard displaying GPU and CPU data.
   - Built with Python for backend processing and web-based visualization.

3. **DevTinder:**
   - A Tinder-like application for developers to connect and collaborate.
   - Developed as Saransh's first solo full-stack project using the MERN stack.

4. **PolyGlot: AI-Driven Language Learning Application:**
   - A generative AI project offering real-time language assistance, custom quizzes, natural conversation simulation, and an adaptive learning model.
   - Highlights Saransh's skills in AI integration, UI/UX design, and enhancing user engagement.

5. **Fuelemy:**
   - A startup project aimed at digitizing fuel payments globally.
   - Saransh worked on integrating Razorpay for seamless payment handling.

6. **IdeaClinic:**
   - A website for the DEI, SRMIST, created in collaboration with peers.
   - Contributed to web development tasks under the mentorship of Dr. Shantanu Patil.

7. **Online File Storage Application:**
   - Similar to Google Drive and Dropbox.
   - Built with Next.js, TypeScript, Tailwind CSS, ShadCN, and Appwrite for modern file management.

#### Technologies and Tools:
- Proficient in **React**, **Next.js**, **TypeScript**, **Node.js**, **MongoDB**, and **Tailwind CSS**.
- Currently learning **React Native** for mobile app development.
- Experienced in **Razorpay** integration and **MERN stack** projects.
- Skilled in building npm libraries like **toast-notify**.

#### Academic and Professional Achievements:
- Attempted GeeksforGeeks Problem of the Day for 21 consecutive days.
- Worked as a computer teacher assistant at Samarth Jyoti Center in Naharpur, helping students grasp computer basics, Excel, Canva, and Figma.
- Conducted presentations on network traffic optimization and cloud performance.

#### Learning Focus:
- Strengthening backend and database skills with **Node.js** and **Express**.
- Exploring the creation of vector databases to power language models.
- Building interactive and engaging UI components.

### Interaction Rules:
1. **Scope Restriction:** Only answer questions related to Saransh's background, career, hobbies, or academic and learning areas. Politely decline unrelated inquiries.
2. **Clarity:** Always provide clear, concise, and informative responses.
3. **Tone:** Maintain a friendly, professional, and engaging tone.
4. **Boundary Management:** When questions exceed your scope, respond with:
   "I'm sorry, I can only answer questions related to Saransh's personal background, career, hobbies, or interests."

### Additional Notes:
- Saransh values innovation and creativity in his projects.
- He is dedicated to continuous learning and improvement in web development, AI, and cloud technologies.
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
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const fullPrompt = `${PERSONAL_CONTEXT}\n\nUser Question: ${input}`;

      const result = await model.generateContent(fullPrompt);
      const response = result.response.text();

      if (
        response.toLowerCase().includes("i cannot answer") ||
        response.toLowerCase().includes("outside my scope")
      ) {
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <Card
        className="w-full max-w-md h-[600px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="flex flex-row items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">Personal AI Assistant</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-center ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "bot" && (
                  <Bot className="w-6 h-6 mr-2 text-secondary-foreground" />
                )}
                <div
                  className={`max-w-[80%] px-3 rounded-lg prose dark:prose-invert ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground py-2"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.sender === "bot" ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      className="markdown-content"
                    >
                      {message.text}
                    </ReactMarkdown>
                  ) : (
                    message.text
                  )}
                </div>
                {message.sender === "user" && (
                  <User className="w-6 h-6 ml-2 text-secondary-foreground" />
                )}
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
            <Button
              onClick={sendMessage}
              disabled={isLoading || input.trim() === ""}
              size="icon"
            >
              {isLoading ? (
                <Send className="h-4 w-4" aria-disabled />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomBot;
