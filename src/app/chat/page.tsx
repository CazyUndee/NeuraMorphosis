'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, User, Loader2, Send } from 'lucide-react';
import { handleChatMessage } from './actions';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [messages]);

  const handleSubmit = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userInput: Message = {
      id: Date.now().toString() + Math.random(),
      sender: 'user',
      text: input,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userInput]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponseText = await handleChatMessage(userInput.text);
      const aiResponse: Message = {
        id: Date.now().toString() + Math.random(),
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to get AI response. Please try again.",
        variant: "destructive",
      });
      // Optionally add the error message back to input or as an AI error message
      const errorResponse: Message = {
        id: Date.now().toString() + Math.random(),
        sender: 'ai',
        text: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] max-w-3xl mx-auto">
      <Card className="flex flex-col flex-grow shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">AI Chat Assistant</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow p-0">
          <ScrollArea ref={scrollAreaRef} className="h-[calc(100vh-20rem)] p-4">
            <div className="space-y-6">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-end space-x-3 ${
                    msg.sender === 'user' ? 'justify-end' : ''
                  }`}
                >
                  {msg.sender === 'ai' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback><Bot className="h-5 w-5 text-primary" /></AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`p-3 rounded-xl max-w-[70%] break-words ${
                      msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-primary-foreground/70 text-right' : 'text-muted-foreground/70'}`}>
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {msg.sender === 'user' && (
                     <Avatar className="h-8 w-8">
                       <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
                     </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-end space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><Bot className="h-5 w-5 text-primary" /></AvatarFallback>
                  </Avatar>
                  <div className="p-3 rounded-xl bg-secondary">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex w-full items-center space-x-3">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow resize-none min-h-[40px]"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              disabled={isLoading}
              aria-label="Chat message input"
            />
            <Button type="submit" disabled={isLoading || !input.trim()} size="icon">
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5"/>}
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
