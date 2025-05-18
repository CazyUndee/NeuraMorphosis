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
        <path d="M16 2c-1.7 0-3.2.8-4.2 2L4 10.2V20h2v-9l7.8-7.8c.5-.4 1.1-.6 1.8-.6s1.3.2 1.8.6L26 11v9h2V10.2L20.2 4c-1-1.2-2.5-2-4.2-2zm0 4.5L6.5 14H10v12h2V14h2v12h2V14h2v12h2V14h3.5L16 6.5zM2 22v8h28v-8H2zm2 2h24v4H4v-4z" />
      </svg>
      <span className="text-2xl font-bold text-foreground">
        Neura<span className="text-primary">Morphosis</span>
      </span>
    </div>
  );
}
