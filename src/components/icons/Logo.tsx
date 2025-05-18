
import type React from 'react';
import { Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  // Props specific to the Logo component can be added here if needed
}

export function Logo({ className, ...divProps }: LogoProps) {
  return (
    <div
      className={cn("flex items-center", className)} // Passed className (e.g., h-8 w-auto) is merged here
      aria-label="NeuraMorphosis Logo"
      {...divProps} // Other div attributes like id, style, etc.
    >
      {/* Brain icon's styling is self-contained */}
      <Brain className="h-8 w-8 text-indigo-500 mr-6" /> {/* Explicit size, color, and right margin */}
      <span className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-indigo-500 to-primary text-transparent bg-clip-text">
          NeuraMorphosis
        </span>
      </span>
    </div>
  );
}
