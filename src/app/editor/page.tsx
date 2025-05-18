'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction, Sparkles } from 'lucide-react';

export default function MDEditorComingSoonPage() {
  return (
    <div className="max-w-3xl mx-auto flex items-center justify-center min-h-[calc(100vh-15rem)]">
      <Card className="shadow-xl w-full text-center">
        <CardHeader>
           <div className="flex items-center justify-center mb-4">
            <Construction className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">MD Editor - Coming Soon!</CardTitle>
          <CardDescription className="text-lg mt-2">
            I'm currently working hard on building this powerful Markdown Editor.
            It will feature live preview, syntax highlighting, and AI-powered content suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-4">
            <p className="text-muted-foreground">Stay tuned for updates!</p>
            <div className="mt-6 flex justify-center">
              <Sparkles className="h-10 w-10 text-accent animate-pulse" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
