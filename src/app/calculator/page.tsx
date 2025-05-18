
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator as CalculatorIcon } from 'lucide-react'; // Renamed to avoid conflict
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CalculatorInfoPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-2xl mx-auto shadow-xl bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center mb-3">
            <CalculatorIcon className="h-10 w-10 text-primary mr-3" />
            <CardTitle className="text-2xl text-primary">CalcAI - More Information</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Discover more about CalcAI, NeuraMorphosis&apos;s intelligent assistant for mathematical exploration and problem-solving.
          </p>
          <p>
            CalcAI is engineered to demystify complex mathematical problems. By leveraging advanced AI algorithms, 
            it provides clear, step-by-step explanations, making math more accessible and understandable for learners of all levels.
            Whether you&apos;re a student, educator, or professional, CalcAI is your partner in tackling mathematical challenges.
          </p>
          <p className="font-semibold text-foreground">
            Key Features of CalcAI (as an external application):
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Step-by-Step Problem Solving:</strong> Breaks down complex equations and problems into manageable, easy-to-follow steps.
            </li>
            <li>
              <strong>Conceptual Explanations:</strong> Offers insights into the underlying mathematical concepts, not just the solutions.
            </li>
            <li>
              <strong>Wide Range of Topics:</strong> Designed to support various mathematical disciplines, from algebra to calculus and beyond.
            </li>
            <li>
              <strong>Interactive Learning:</strong> Encourages an engaging and interactive learning experience to foster deeper understanding.
            </li>
            <li>
              <strong>Accuracy and Reliability:</strong> Built on robust AI models to ensure accurate solutions and trustworthy explanations.
            </li>
          </ul>
           <p className="pt-2">
            CalcAI aims to transform how users interact with mathematics, turning potential frustration into an opportunity for discovery and learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button asChild size="lg" className="flex-1">
              {/* TODO: Replace #_PROJECT_CALCULATOR_URL with the actual URL to your calculator project */}
              <a href="#_PROJECT_CALCULATOR_URL" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <CalculatorIcon className="mr-2 h-5 w-5" /> Try CalcAI Now
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
