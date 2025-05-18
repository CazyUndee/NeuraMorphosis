'use server';

/**
 * @fileOverview Explains the steps for solving a calculator problem.
 *
 * - explainCalculatorProblem - A function that handles the explanation of the calculator problem.
 * - ExplainCalculatorProblemInput - The input type for the explainCalculatorProblem function.
 * - ExplainCalculatorProblemOutput - The return type for the explainCalculatorProblem function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainCalculatorProblemInputSchema = z.object({
  problem: z.string().describe('The mathematical problem to explain.'),
});
export type ExplainCalculatorProblemInput = z.infer<
  typeof ExplainCalculatorProblemInputSchema
>;

const ExplainCalculatorProblemOutputSchema = z.object({
  explanation: z
    .string()
    .describe('The step-by-step explanation of the solution.'),
});
export type ExplainCalculatorProblemOutput = z.infer<
  typeof ExplainCalculatorProblemOutputSchema
>;

export async function explainCalculatorProblem(
  input: ExplainCalculatorProblemInput
): Promise<ExplainCalculatorProblemOutput> {
  return explainCalculatorProblemFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainCalculatorProblemPrompt',
  input: {schema: ExplainCalculatorProblemInputSchema},
  output: {schema: ExplainCalculatorProblemOutputSchema},
  prompt: `You are an expert math teacher. Your goal is to explain how to solve the provided problem step by step, so that the student can understand the underlying concepts.

Problem: {{{problem}}}`,
});

const explainCalculatorProblemFlow = ai.defineFlow(
  {
    name: 'explainCalculatorProblemFlow',
    inputSchema: ExplainCalculatorProblemInputSchema,
    outputSchema: ExplainCalculatorProblemOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
