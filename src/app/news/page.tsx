
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper, MessageSquare, Calculator, Zap } from 'lucide-react';

export default function NewsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6 md:px-12">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Newspaper className="h-20 w-20 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Latest Updates from NeuraMorphosis
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about our newest releases, feature updates, and company milestones.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-primary/30 transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <div className="flex items-center text-primary mb-2">
                <MessageSquare className="h-10 w-10 mr-3" />
                <CardTitle className="text-2xl">NeuraMorphosis Chat v1 Launched!</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">November 15, 2023</p> 
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                We're thrilled to announce the official launch of NeuraMorphosis Chat v1! Engage in intelligent conversations, get instant answers, and experience the power of our advanced NLP-driven chat application.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-primary/30 transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <div className="flex items-center text-primary mb-2">
                <Calculator className="h-10 w-10 mr-3" />
                <CardTitle className="text-2xl">CalcAI v1 is Here!</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">October 28, 2023</p> 
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                Introducing CalcAI v1, your new AI-powered mathematics assistant. Solve complex problems with detailed, step-by-step explanations. Making math more accessible than ever!
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-primary/30 transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <div className="flex items-center text-primary mb-2">
                <Zap className="h-10 w-10 mr-3" /> 
                <CardTitle className="text-2xl">Morph Editor: Sneak Peek!</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">Coming Soon</p> 
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                Get ready for Morph Editor! Our next-gen Markdown editor with AI assistance is under active development. Expect smart suggestions, live previews, and much more. Stay tuned for updates!
              </p>
            </CardContent>
          </Card>
          
          {/* Add more news items as Card components below */}

        </div>
      </div>
    </div>
  );
}
