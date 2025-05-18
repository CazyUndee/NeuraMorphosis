
import React from 'react';
import Link from 'next/link';

export interface NewsItem {
  id: string; // unique id for key prop
  productSlug: string;
  productName: string;
  version?: string;
  date: string; // YYYY-MM-DD for sorting
  title: string;
  content: React.ReactNode; // Can be string or JSX
}

export const newsItems: NewsItem[] = [
  // NeuraMorphosis Chat
  {
    id: 'nm-chat-v1',
    productSlug: 'neuramorphosis-chat',
    productName: 'NeuraMorphosis Chat',
    version: '1.0.0',
    date: '2025-05-18',
    title: 'NeuraMorphosis Chat v1 Launched!',
    content: (
      <div>
        <p>We're thrilled to announce the official launch of NeuraMorphosis Chat v1! Engage in intelligent conversations, get instant answers, and experience the power of our advanced NLP-driven chat application.</p>
        <p className="mt-2">Key features in this release include enhanced contextual understanding, multi-turn conversation capabilities, and access to a broad knowledge base.</p>
      </div>
    ),
  },
  {
    id: 'nm-chat-v0.9-beta',
    productSlug: 'neuramorphosis-chat',
    productName: 'NeuraMorphosis Chat',
    version: '0.9.0 Beta',
    date: '2025-04-20',
    title: 'NeuraMorphosis Chat Enters Public Beta!',
    content: (
      <p>Exciting news! NeuraMorphosis Chat is now available for public beta testing. Your feedback during this phase will be invaluable in refining the experience before the official launch. Head over to <a href="https://neuramorph.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">neuramorph.vercel.app</a> to try it out!</p>
    ),
  },
  // CalcAI
  {
    id: 'calcai-v1',
    productSlug: 'calcai',
    productName: 'CalcAI',
    version: '1.0.0',
    date: '2025-05-18',
    title: 'CalcAI v1 is Here!',
    content: (
      <div>
        <p>Introducing CalcAI v1, your new AI-powered mathematics assistant. Solve complex problems with detailed, step-by-step explanations. Making math more accessible than ever!</p>
        <p className="mt-2">CalcAI helps demystify complex mathematical problems by providing clear, step-by-step explanations, making math more accessible and understandable for learners of all levels.</p>
      </div>
    ),
  },
  // Morph Editor
  {
    id: 'morph-editor-sneak-peek',
    productSlug: 'morph-editor',
    productName: 'Morph Editor',
    date: '2025-05-18',
    title: 'Morph Editor: Development Update & Feature Spotlight!',
    content: (
      <div>
        <p>Get ready for Morph Editor! Our next-gen Markdown editor with AI assistance is under active development. We're focusing on a seamless, powerful, and AI-enhanced writing experience.</p>
        <p className="mt-2">Current development efforts are geared towards integrating a real-time live preview, advanced syntax highlighting, and the core AI assistant powered by Genkit. Stay tuned for more updates as we approach our initial preview!</p>
        <p className="mt-2">You can check out the <Link href="/editor/docs" className="text-primary hover:underline">preliminary technical documentation</Link> for a deeper dive into our plans.</p>
      </div>
    ),
  },
];
