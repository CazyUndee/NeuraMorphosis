
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';

const footerNavItems = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/editor', label: 'Morph Editor (Soon)' },
];

const legalLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Cookie Policy' },
  { href: '#', label: 'Terms of Service' },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40 bg-background text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" aria-label="NeuraMorphosis Home" className="mb-2">
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-center md:text-left">
              Empowering innovation with AI-driven solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 text-center md:text-left">Navigation</h3>
            <ul className="space-y-2 text-center md:text-left">
              {footerNavItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 text-center md:text-left">Legal</h3>
            <ul className="space-y-2 text-center md:text-left">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 pt-6 text-center text-sm">
          © {currentYear} NeuraMorphosis. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
