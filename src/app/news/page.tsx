
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';

export default function NewsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl font-bold mb-12 text-foreground">
          Latest Updates from NeuraMorphosis
        </h1>
        <div className="max-w-2xl mx-auto space-y-8">
          <Card className="shadow-lg hover:shadow-primary/30 transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-center text-primary mb-2">
                <Newspaper className="h-10 w-10 mr-3" />
                <CardTitle className="text-2xl">Stay Tuned!</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're hard at work on exciting new features and products. The Morph Editor is evolving, and other AI innovations are on the horizon. 
                Check back here for our first official news update soon!
              </p>
            </CardContent>
          </Card>
          {/* Future news items can be added here as more Card components */}
          {/* 
          Example of another news item:
          <Card className="shadow-lg hover:shadow-primary/30 transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-center text-primary mb-2">
                <Zap className="h-10 w-10 mr-3" /> // Or another relevant icon
                <CardTitle className="text-2xl">New Feature Launched!</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">October 26, 2023</p> 
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're thrilled to announce the launch of [New Feature Name]. 
                [Brief description of the feature and its benefits.]
              </p>
            </CardContent>
          </Card>
          */}
        </div>
      </div>
    </div>
  );
}
