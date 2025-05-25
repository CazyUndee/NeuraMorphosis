
import type { Metadata } from 'next';
import { Outfit, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap', // Added display: 'swap' for better font loading behavior
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap', // Added display: 'swap'
});

export const metadata: Metadata = {
  title: 'NeuraMorphosis',
  description: 'NeuraMorphosis specializes in AI, offering links to an AI Chat App, CalcAI, and an upcoming Morph Editor.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/*
        The CSS variables (--font-outfit, --font-geist-mono) are made globally available by next/font.
        We don't need to add outfit.variable or geistMono.variable to the className here.
        Tailwind will pick them up via its configuration.
      */}
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
