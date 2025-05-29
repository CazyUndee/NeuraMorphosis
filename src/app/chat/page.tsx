
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ChatInfoPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-2xl mx-auto shadow-xl bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center mb-3">
            <MessageSquare className="h-10 w-10 text-primary mr-3" />
            <CardTitle className="text-2xl text-primary">NeuraMorphosis Chat - More Information</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Welcome to the information hub for NeuraMorphosis Chat! This is where you can learn more about our advanced NLP-powered chat application, 
            designed to facilitate intelligent conversations and provide real-time assistance.
          </p>
          <p>
            NeuraMorphosis Chat empowers you to engage with AI in a natural and intuitive way. Whether you&apos;re looking for quick answers,
            creative brainstorming, assistance with complex tasks, or just an engaging chat partner, NeuraMorphosis Chat is built to understand and respond effectively.
          </p>
          <p className="font-semibold text-foreground">
            Key Aspects of NeuraMorphosis Chat (as an external application):
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Contextual Understanding:</strong> Engages in meaningful dialogues by remembering previous parts of the conversation.
            </li>
            <li>
              <strong>Multi-Turn Conversations:</strong> Capable of handling extended interactions and follow-up questions seamlessly.
            </li>
            <li>
              <strong>Broad Knowledge Base:</strong> Accesses and processes vast amounts of information to provide comprehensive answers.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Designed for ease of use, ensuring a smooth and enjoyable chat experience for everyone.
            </li>
            <li>
              <strong>Versatile Applications:</strong> Useful for customer support, educational purposes, content creation, and much more.
            </li>
          </ul>
          <p className="pt-2">
            Our goal with NeuraMorphosis Chat is to push the boundaries of conversational AI, making sophisticated technology accessible and beneficial for everyday use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button asChild size="lg" className="flex-1">
              <a href="https://morph-chat-mu.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <MessageSquare className="mr-2 h-5 w-5" /> Try NeuraMorphosis Chat Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1">
              <Link href="/">
                Back to Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
