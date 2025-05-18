
import type React from 'react';
import { Brain } from 'lucide-react';

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center" aria-label="NeuraMorphosis Logo">
      <Brain className="mr-6 h-8 w-8 text-indigo-500" {...props} />
      <span className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-indigo-500 to-primary text-transparent bg-clip-text">
          NeuraMorphosis
        </span>
      </span>
    </div>
  );
}
