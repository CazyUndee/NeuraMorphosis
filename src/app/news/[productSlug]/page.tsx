
import { newsItems, type NewsItem } from '@/lib/newsData.tsx';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, Tag } from 'lucide-react';

export async function generateStaticParams() {
  // Pre-render paths for all unique product slugs
  const productSlugs = Array.from(new Set(newsItems.map(item => item.productSlug)));
  return productSlugs.map(slug => ({ productSlug: slug }));
}

export default function ProductNewsPage({ params }: { params: { productSlug: string } }) {
  const { productSlug } = params;
  const productSpecificNews = newsItems
    .filter(item => item.productSlug === productSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date, latest first

  if (productSpecificNews.length === 0) {
    // If no news items found for this slug, show 404 or redirect
    // For example, if a slug is mistyped in the URL
    notFound();
  }

  const productName = productSpecificNews[0].productName; // All items for this slug will have the same product name

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/news">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Product News
            </Link>
          </Button>
        </div>

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            {productName} Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow along with the latest news, feature releases, and announcements for {productName}.
          </p>
        </header>

        <div className="max-w-3xl mx-auto space-y-12">
          {productSpecificNews.map((item, index) => (
            <article key={item.id} className="relative">
              {/* Vertical line for timeline effect, except for the last item */}
              {index < productSpecificNews.length -1 && (
                <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-border -ml-[1px] hidden sm:block" aria-hidden="true"></div>
              )}
               {/* Dot on the timeline */}
               <div className="absolute left-5 top-12 h-3 w-3 rounded-full bg-primary border-2 border-background -ml-[5px] hidden sm:block" aria-hidden="true"></div>


              <Card className="shadow-lg overflow-hidden sm:ml-12">
                <CardHeader className="bg-card/50 border-b">
                  <CardTitle className="text-2xl md:text-3xl text-foreground">
                    {item.title}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground space-y-1 pt-2">
                    <div className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      <span>
                        {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                    </div>
                    {item.version && (
                      <div className="flex items-center">
                        <Tag className="mr-2 h-4 w-4" />
                        <span>Version {item.version}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="py-6 px-6 md:px-8 text-foreground/90 space-y-4">
                  {/* This content can be rich JSX */}
                  {item.content}
                </CardContent>
              </Card>
              {/* Separator for mobile or when timeline is not desired */}
              {index < productSpecificNews.length - 1 && <Separator className="my-12 sm:hidden" />}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper function to generate metadata (optional, but good practice)
export async function generateMetadata({ params }: { params: { productSlug: string } }) {
  const productSpecificNews = newsItems.filter(item => item.productSlug === params.productSlug);
  if (productSpecificNews.length === 0) {
    return { title: 'News Not Found' };
  }
  const productName = productSpecificNews[0].productName;
  return {
    title: `${productName} - News & Updates`,
    description: `Latest news, updates, and release notes for ${productName}.`,
  };
}
