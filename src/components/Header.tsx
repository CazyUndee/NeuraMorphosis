
'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Logo } from '@/components/icons/Logo';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/editor', label: 'Morph Editor (Soon)' },
];

export function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  // Close sheet on navigation for mobile
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  const NavLinks = ({ onItemClick }: { onItemClick?: () => void }) => (
    <>
      {navItems.map((item) => (
        <Button key={item.label} variant="ghost" asChild onClick={onItemClick}>
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
    </>
  );
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" aria-label="NeuraMorphosis Home">
          <Logo className="h-8 w-auto" />
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
            <SheetContent side="right" className="w-full bg-background p-6">
              <SheetHeader className="mb-6 flex justify-start items-center">
                <Link href="/" onClick={() => setIsOpen(false)}>
                   <Logo className="h-7 w-auto" />
                </Link>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-3">
                <NavLinks onItemClick={() => setIsOpen(false)} />
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center space-x-2">
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
}
