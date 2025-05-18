import type React from 'react';

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center" aria-label="NeuraMorphosis Logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="currentColor"
        className="mr-2 text-primary"
        {...props}
      >
        {/* New abstract logo design */}
        <path d="M6,26 L10,26 L14,6 L10,6 Z M10,6 L14,6 L22,26 L18,26 Z M18,26 L22,26 L26,6 L22,6 Z" />
      </svg>
      <span className="text-2xl font-bold text-foreground">
        Neura<span className="text-primary">Morphosis</span>
      </span>
    </div>
  );
}
