'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center p-4">
      <AlertTriangle className="h-16 w-16 text-destructive mb-6" />
      <h2 className="text-3xl font-bold text-destructive mb-4">Oops! Something went wrong.</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        We encountered an unexpected issue. Please try again, or contact support if the problem persists.
      </p>
      {error?.message && (
        <pre className="mb-6 p-3 bg-destructive/10 text-destructive text-sm rounded-md max-w-full overflow-x-auto">
          Error: {error.message}
        </pre>
      )}
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        size="lg"
        variant="destructive"
      >
        Try Again
      </Button>
    </div>
  );
}
