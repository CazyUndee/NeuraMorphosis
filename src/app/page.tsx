
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { MessageSquare, Calculator, Construction, Brain, Lightbulb, Zap, Mail } from 'lucide-react';

const applications = [
  {
    title: 'NeuraMorphosis Chat',
    description: "Engage with NeuraMorphosis Chat, your intelligent AI companion! Experience natural, multi-turn conversations, get instant answers to your queries, and let its broad knowledge base help you brainstorm new ideas or assist with tasks. It's designed for intuitive interaction and real-time support.",
    icon: MessageSquare,
    tryLink: 'https://morph-chat-nu.vercel.app',
    learnMoreLink: '/chat',
  },
  {
    title: 'CalcAI',
    description: 'Unlock complex mathematical problems with CalcAI. This intelligent assistant provides clear, step-by-step explanations using advanced AI algorithms, making even challenging concepts more accessible and understandable for learners of all levels.',
    icon: Calculator,
    tryLink: 'https://calcai-alpha.vercel.app',
    learnMoreLink: '/calculator',
  },
  {
    title: 'Morph Editor',
    description: 'Discover Morph Editor, a next-generation markdown tool designed for a seamless writing experience. Enjoy live previews and intuitive syntax highlighting. AI-powered content suggestions and smart assistance features are coming soon to enhance your productivity!',
    icon: Construction,
    tryLink: null,
    learnMoreLink: '/editor',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          Neura<span className="bg-gradient-to-r from-indigo-500 to-primary text-transparent bg-clip-text">Morphosis</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
          Welcome to NeuraMorphosis! We specialize in creating cutting-edge, AI-powered solutions to enhance productivity and spark innovation.
          This is your gateway to our latest tools and applications.
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Button size="lg" asChild>
            <a href="https://morph-chat-nu.vercel.app" target="_blank" rel="noopener noreferrer">
              NeuraMorphosis Chat <MessageSquare className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://calcai-alpha.vercel.app" target="_blank" rel="noopener noreferrer">
              CalcAI <Calculator className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/editor">Morph Editor (Coming Soon) <Construction className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Applications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {applications.map((app) => (
            <Card key={app.title} className="shadow-lg hover:shadow-primary/30 transition-shadow duration-300 h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center text-primary mb-2">
                  <app.icon className="h-10 w-10 mr-3 flex-shrink-0" />
                  <CardTitle className="text-2xl break-words min-w-0">{app.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{app.description}</CardDescription>
              </CardContent>
              <CardFooter className="pt-4">
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 w-full">
                  {app.tryLink && (
                    <Button asChild className="w-full sm:flex-1">
                      <a href={app.tryLink} target="_blank" rel="noopener noreferrer">Try Now</a>
                    </Button>
                  )}
                  {app.learnMoreLink && (
                    <Button asChild className="w-full sm:flex-1" variant={app.tryLink ? "outline" : "default"}>
                      <Link href={app.learnMoreLink}>Learn More</Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
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
                <p className="text-muted-foreground">Our projects are designed with simplicity and usability in mind, ensuring a seamless experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section Placeholder */}
      <section id="contact" className="py-12 text-center">
        <div className="flex justify-center items-center mb-6">
          <Mail className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          We're excited to hear from you! Whether you have questions, ideas, or just want to connect, feel free to reach out.
        </p>
        <Button size="lg" variant="outline" asChild>
          <a href="mailto:contact.neuramorphosis@gmail.com">contact.neuramorphosis@gmail.com</a>
        </Button>
      </section>
    </div>
  );
}
