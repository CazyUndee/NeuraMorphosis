'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CalculatorIcon, Wand2 } from 'lucide-react';
import { handleCalculation } from './actions';
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from '@/components/ui/scroll-area';

export default function AICalculatorPage() {
  const [problem, setProblem] = useState('');
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!problem.trim() || isLoading) return;

    setIsLoading(true);
    setExplanation(null);

    try {
      const result = await handleCalculation(problem);
      setExplanation(result);
    } catch (error) {
      console.error('Error calculating:', error);
      toast({
        title: "Calculation Error",
        description: (error instanceof Error ? error.message : "Failed to get explanation. Please try again."),
        variant: "destructive",
      });
      setExplanation("Sorry, an error occurred while processing your problem.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-2">
            <CalculatorIcon className="h-10 w-10 mr-3 text-primary" />
            <CardTitle className="text-3xl font-bold text-primary">AI Calculator</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Enter a mathematical problem, and our AI will provide a step-by-step solution.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="math-problem" className="text-sm font-medium">
                Your Math Problem
              </label>
              <Input
                id="math-problem"
                type="text"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="e.g., (2 + 3) * 5 / sqrt(16)"
                className="text-lg p-3"
                disabled={isLoading}
                aria-label="Math problem input"
              />
            </div>
            <Button type="submit" className="w-full text-lg py-6" disabled={isLoading || !problem.trim()}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-6 w-6 animate-spin" /> Calculating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-6 w-6" /> Get Solution
                </>
              )}
            </Button>
          </form>
        </CardContent>
        
        {explanation && (
          <CardFooter className="mt-6 border-t pt-6">
            <div className="w-full">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Solution Explanation:</h3>
              <ScrollArea className="h-auto max-h-[400px] p-4 bg-secondary rounded-md shadow">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed font-mono">
                  {explanation}
                </pre>
              </ScrollArea>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
