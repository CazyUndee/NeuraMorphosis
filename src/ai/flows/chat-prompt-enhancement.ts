'use server';
/**
 * @fileOverview Enhances user prompts for the AI chat to provide more detailed and accurate responses.
 *
 * - enhancePrompt - A function that enhances the user's prompt with additional context for better AI responses.
 * - EnhancePromptInput - The input type for the enhancePrompt function.
 * - EnhancePromptOutput - The return type for the enhancePrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhancePromptInputSchema = z.object({
  userPrompt: z.string().describe('The original prompt provided by the user.'),
});
export type EnhancePromptInput = z.infer<typeof EnhancePromptInputSchema>;

const EnhancePromptOutputSchema = z.object({
  enhancedPrompt: z.string().describe('The enhanced prompt with additional details and context.'),
});
export type EnhancePromptOutput = z.infer<typeof EnhancePromptOutputSchema>;

export async function enhancePrompt(input: EnhancePromptInput): Promise<EnhancePromptOutput> {
  return enhancePromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceUserPrompt',
  input: {schema: EnhancePromptInputSchema},
  output: {schema: EnhancePromptOutputSchema},
  prompt: `You are an AI prompt enhancer. Your job is to take the user's original prompt and add more detail and context to it so that the AI can provide a more accurate and relevant response.

Original Prompt: {{{userPrompt}}}

Enhanced Prompt:`, // The AI will complete this, generating the enhanced prompt
});

const enhancePromptFlow = ai.defineFlow(
  {
    name: 'enhancePromptFlow',
    inputSchema: EnhancePromptInputSchema,
    outputSchema: EnhancePromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
