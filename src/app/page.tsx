import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Calculator, FileText, Brain, Lightbulb, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
          Neura<span className="text-primary">Morphosis</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
          Shaping the Future with Intelligent Solutions. Discover our cutting-edge AI-powered tools designed to transform your productivity and creativity.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" asChild>
            <Link href="/chat">Explore AI Chat <MessageSquare className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/calculator">Try AI Calculator <Calculator className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/editor">Discover MD Editor <FileText className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
        <div className="mt-12 relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <Image 
            src="https://placehold.co/1200x675/333333/8C52FF.png" 
            alt="Abstract AI visualization" 
            layout="fill"
            objectFit="cover"
            data-ai-hint="abstract technology"
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Innovative Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-primary/30 transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center text-primary mb-2">
                <MessageSquare className="h-10 w-10 mr-3" />
                <CardTitle className="text-2xl">AI Chat</CardTitle>
              </div>
              <CardDescription>Engage in intelligent conversations and get real-time assistance with our advanced NLP-powered chat application.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/chat">Launch AI Chat</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-primary/30 transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center text-primary mb-2">
                <Calculator className="h-10 w-10 mr-3" />
                <CardTitle className="text-2xl">AI Calculator</CardTitle>
              </div>
              <CardDescription>Solve complex mathematical problems with step-by-step explanations, powered by our intelligent AI algorithms.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/calculator">Use AI Calculator</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-primary/30 transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center text-primary mb-2">
                <FileText className="h-10 w-10 mr-3" />
                <CardTitle className="text-2xl">MD Editor</CardTitle>
              </div>
              <CardDescription>A powerful markdown editor with live preview and syntax highlighting. AI-powered content suggestions coming soon!</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/editor">Open MD Editor</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 bg-card rounded-xl shadow-xl">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">About NeuraMorphosis</h2>
          <div className="flex justify-center mb-6">
            <Brain className="h-16 w-16 text-primary" />
          </div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            At NeuraMorphosis, we are passionate about harnessing the power of artificial intelligence to build innovative and practical solutions. Our mission is to empower individuals and businesses with smart tools that enhance efficiency, spark creativity, and unlock new possibilities in the digital age. We believe in the transformative potential of AI and are committed to developing ethical and user-centric technologies.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex items-start space-x-4 p-6 bg-background rounded-lg">
              <Lightbulb className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Innovation-Driven</h3>
                <p className="text-muted-foreground">We constantly explore new frontiers in AI to bring you cutting-edge features and capabilities.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-background rounded-lg">
              <Zap className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">User-Focused</h3>
                <p className="text-muted-foreground">Our products are designed with simplicity and usability in mind, ensuring a seamless experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section Placeholder */}
      <section id="contact" className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Get in Touch</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Have questions or want to learn more? We'd love to hear from you.
        </p>
        <Button size="lg" variant="outline" asChild>
          <a href="mailto:contact@neuramorphosis.com">contact@neuramorphosis.com</a>
        </Button>
      </section>
    </div>
  );
}
