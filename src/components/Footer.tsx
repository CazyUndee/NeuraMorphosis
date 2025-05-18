'use client';

import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        © {currentYear} NeuraMorphosis. All rights reserved.
      </div>
    </footer>
  );
}
