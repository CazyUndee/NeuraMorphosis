
import Link from 'next/link';
import { newsItems, type NewsItem } from '@/lib/newsData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Newspaper, MessageSquare, Calculator, FileText } from 'lucide-react';

interface ProductSummary {
  slug: string;
  name: string;
  icon: React.ElementType;
  latestUpdate?: NewsItem;
  updateCount: number;
}

const productIcons: { [key: string]: React.ElementType } = {
  'neuramorphosis-chat': MessageSquare,
  'calcai': Calculator,
  'morph-editor': FileText,
};

export default function NewsIndexPage() {
  const productsMap = new Map<string, ProductSummary>();

  // Sort all news items by date globally to easily find the latest for each product
  const sortedNewsItems = [...newsItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  sortedNewsItems.forEach(item => {
    if (!productsMap.has(item.productSlug)) {
      productsMap.set(item.productSlug, {
        slug: item.productSlug,
        name: item.productName,
        icon: productIcons[item.productSlug] || Newspaper,
        latestUpdate: item, // Since items are sorted, the first one encountered for a product is its latest
        updateCount: 0,
      });
    }
    const product = productsMap.get(item.productSlug)!;
    product.updateCount++;
  });

  const products = Array.from(productsMap.values());

  return (
    <div className="py-12">
      <div className="container mx-auto px-6 md:px-12">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Newspaper className="h-20 w-20 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Product News & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about the latest developments for each of our applications.
          </p>
        </header>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => {
              const Icon = product.icon;
              return (
                <Card key={product.slug} className="shadow-lg hover:shadow-primary/30 transition-shadow duration-300 flex flex-col">
                  <CardHeader>
                    <div className="flex items-center text-primary mb-2">
                      <Icon className="h-10 w-10 mr-3 flex-shrink-0" />
                      <CardTitle className="text-2xl break-words min-w-0">{product.name}</CardTitle>
                    </div>
                    {product.latestUpdate && (
                       <CardDescription className="line-clamp-2">
                         Latest: {product.latestUpdate.title} ({new Date(product.latestUpdate.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })})
                       </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      {product.updateCount} update{product.updateCount !== 1 ? 's' : ''} posted.
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button asChild className="w-full">
                      <Link href={`/news/${product.slug}`}>
                        View All Updates <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">No news updates yet. Check back soon!</p>
        )}
      </div>
    </div>
  );
}
