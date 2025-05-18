
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction, Sparkles, Eye, Code, BrainCircuit } from 'lucide-react';

export default function MDEditorComingSoonPage() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-15rem)] py-10">
      <Card className="shadow-xl w-full text-center bg-card/80 backdrop-blur-sm flex flex-col flex-grow">
        <CardHeader className="pb-4">
           <div className="flex items-center justify-center mb-6">
            <Construction className="h-20 w-20 text-primary animate-bounce" />
          </div>
          <CardTitle className="text-4xl font-bold text-primary mb-2">
            Our Next-Gen MD Editor is Brewing!
          </CardTitle>
          <CardDescription className="text-lg sm:text-xl mt-3 max-w-2xl mx-auto">
            Get ready for a revolutionary Markdown editing experience! We're meticulously crafting a powerful tool designed to supercharge your writing and documentation workflow.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2 flex flex-col flex-grow justify-around">
          <div className="mt-6 space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Here's a Sneak Peek of What's Coming:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-background/50 rounded-lg shadow-md hover:shadow-primary/20 transition-shadow">
                <div className="flex items-center mb-3">
                  <Eye className="h-8 w-8 text-accent mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Live Preview Perfected</h4>
                </div>
                <p className="text-muted-foreground">
                  No more guessing! See your Markdown render into beautiful HTML in real-time, side-by-side, as you type.
                </p>
              </div>

              <div className="p-6 bg-background/50 rounded-lg shadow-md hover:shadow-primary/20 transition-shadow">
                <div className="flex items-center mb-3">
                  <Code className="h-8 w-8 text-accent mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Crystal-Clear Syntax</h4>
                </div>
                <p className="text-muted-foreground">
                  Enjoy vibrant and intuitive syntax highlighting for both Markdown and embedded code blocks, making your content easy to read and edit.
                </p>
              </div>
              
              <div className="p-6 bg-background/50 rounded-lg shadow-md hover:shadow-primary/20 transition-shadow">
                <div className="flex items-center mb-3">
                  <BrainCircuit className="h-8 w-8 text-accent mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">AI-Powered Assistance</h4>
                </div>
                <p className="text-muted-foreground">
                  Unlock your creative potential with intelligent, AI-driven suggestions, rephrasing, summarization, and even content generation prompts!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xl text-foreground font-semibold">We're pouring all our expertise into this editor!</p>
            <p className="text-lg text-muted-foreground mt-2">
              Expect a seamless, powerful, and inspiring Markdown experience.
            </p>
            <div className="mt-8 flex justify-center items-center space-x-2">
              <Sparkles className="h-10 w-10 text-primary animate-pulse" />
              <p className="text-2xl font-bold text-primary">Stay Tuned for Launch!</p>
              <Sparkles className="h-10 w-10 text-primary animate-pulse" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
