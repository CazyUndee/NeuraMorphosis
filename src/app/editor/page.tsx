'use client';

import { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Sparkles } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

// Basic markdown to HTML - very simplified for preview
function basicMarkdownToHtml(md: string): string {
  let html = md;
  // Headlines
  html = html.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
  html = html.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  // Bold
  html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/__(.*)__/gim, '<strong>$1</strong>');
  // Italic
  html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');
  html = html.replace(/_(.*)_/gim, '<em>$1</em>');
  // Links
  html = html.replace(/\[([^\[]+)\]\(([^\)]+)\)/gim, '<a href="$2" target="_blank" class="text-accent hover:underline">$1</a>');
  // New lines
  html = html.replace(/\n/gim, '<br>');
  return html;
}


export default function MDEditorPage() {
  const [markdown, setMarkdown] = useState<string>('');
  const [htmlPreview, setHtmlPreview] = useState<string>('');

  useEffect(() => {
    // Basic live preview (for a real app, use a library like react-markdown)
    const previewContent = basicMarkdownToHtml(markdown);
    setHtmlPreview(previewContent);
  }, [markdown]);

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
           <div className="flex items-center justify-center mb-2">
            <FileText className="h-10 w-10 mr-3 text-primary" />
            <CardTitle className="text-3xl font-bold text-primary">Markdown Editor</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Craft your content with ease. Live preview and syntax highlighting.
          </CardDescription>
          <div className="mt-2">
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              <Sparkles className="mr-2 h-4 w-4" />
              AI Content Suggestions - Coming Soon!
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(100vh-20rem)] md:h-[calc(100vh-22rem)]">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Markdown Input</h3>
              <Textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="## Start typing your markdown here..."
                className="flex-grow resize-none p-4 text-base font-mono bg-background border-2 border-input focus:border-primary"
                aria-label="Markdown input area"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Live Preview</h3>
              <ScrollArea className="flex-grow p-4 border-2 border-input rounded-md bg-background">
                {markdown ? (
                   <div
                      className="prose prose-sm sm:prose-base dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: htmlPreview }}
                    />
                ) : (
                  <p className="text-muted-foreground italic">Preview will appear here...</p>
                )}
              </ScrollArea>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
