
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Construction, Sparkles, Eye, Code, BrainCircuit, BookOpen, FileText } from 'lucide-react';

export default function MorphEditorFeatureOverviewPage() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col min-h-[calc(100vh-15rem)] py-10 space-y-12">
      <header className="text-center">
        <div className="flex items-center justify-center mb-6">
          <BookOpen className="h-16 w-16 text-primary mr-4" />
          <Construction className="h-20 w-20 text-accent animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold text-primary mb-3">
          Morph Editor - Feature Overview (Coming Soon!)
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Welcome to the future of Markdown editing! Morph Editor is being meticulously crafted to provide a seamless, powerful, and AI-enhanced writing experience. Below is a sneak peek at the features we're building.
        </p>
      </header>

      <Card className="shadow-xl bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Introduction (Planned)</CardTitle>
          <CardDescription>
            Morph Editor aims to revolutionize your documentation and content creation workflow. Our goal is to blend intuitive design with cutting-edge AI to help you write better, faster.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section will provide a comprehensive introduction to Morph Editor, its philosophy, and how to get started once it's launched.
          </p>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Core Features (Under Development)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-primary/20 transition-shadow flex flex-col">
            <CardHeader>
              <div className="flex items-center mb-3">
                <Eye className="h-10 w-10 text-accent mr-3" />
                <CardTitle className="text-xl">Real-time Live Preview</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                Instantly see your Markdown render into beautiful HTML as you type. Our side-by-side preview will ensure what you see is what you get, eliminating guesswork and speeding up your writing process.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-primary/20 transition-shadow flex flex-col">
            <CardHeader>
              <div className="flex items-center mb-3">
                <Code className="h-10 w-10 text-accent mr-3" />
                <CardTitle className="text-xl">Advanced Syntax Highlighting</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                Enjoy vibrant and intuitive syntax highlighting for Markdown and embedded code blocks. Clear visual distinctions will make your content easy to read, write, and debug.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-primary/20 transition-shadow flex flex-col">
            <CardHeader>
              <div className="flex items-center mb-3">
                <BrainCircuit className="h-10 w-10 text-accent mr-3" />
                <CardTitle className="text-xl">AI-Powered Assistant</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                Unlock your creative potential with an intelligent AI assistant. Expect features like smart suggestions, rephrasing, summarization, grammar correction, and even content generation prompts!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="text-center mt-12 py-8 bg-card/50 rounded-lg shadow-md">
        <p className="text-xl text-foreground font-semibold">
          We're pouring all our expertise into Morph Editor!
        </p>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          This page offers a glimpse. For a deeper dive into our technical vision and planned architecture, check out our preliminary documentation.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/editor/docs">
            <FileText className="mr-2 h-5 w-5" />
            View Technical Documentation Preview
          </Link>
        </Button>
        <div className="mt-8 flex justify-center items-center space-x-2">
          <Sparkles className="h-10 w-10 text-primary animate-pulse" />
          <p className="text-2xl font-bold text-primary">Stay Tuned for Launch!</p>
          <Sparkles className="h-10 w-10 text-primary animate-pulse" />
        </div>
      </div>
    </div>
  );
}
