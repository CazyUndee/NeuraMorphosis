'use server';

import { explainCalculatorProblem, type ExplainCalculatorProblemInput } from '@/ai/flows/calculator-problem-explanation';

export async function handleCalculation(problem: string): Promise<string> {
  if (!problem.trim()) {
    throw new Error('Problem input cannot be empty.');
  }

  const input: ExplainCalculatorProblemInput = { problem };

  try {
    const result = await explainCalculatorProblem(input);
    return result.explanation;
  } catch (error) {
    console.error('AI Calculator Error:', error);
    // It's good practice to not expose raw error messages to the client
    // unless they are specifically crafted for user consumption.
    if (error instanceof Error && error.message.includes('quota')) {
         throw new Error('API quota exceeded. Please try again later.');
    }
    throw new Error('Failed to process the calculation due to an internal error.');
  }
}
