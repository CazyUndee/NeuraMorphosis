
import type React from 'react';
import { Brain } from 'lucide-react';

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center" aria-label="NeuraMorphosis Logo">
      <Brain className="mr-4 h-8 w-8 text-blue-500" {...props} />
      <span className="text-2xl font-bold">
        <span className="text-blue-500">Neura</span><span className="text-primary">Morphosis</span>
      </span>
    </div>
  );
}
