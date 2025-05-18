
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Cookie } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-3xl mx-auto shadow-xl bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center mb-4">
            <Cookie className="h-10 w-10 text-primary mr-3" />
            <CardTitle className="text-3xl text-primary">Cookie Policy</CardTitle>
          </div>
          <CardDescription>Last Updated: May 18, 2025</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">1. What Are Cookies?</h2>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">2. How Do We Use Cookies?</h2>
            <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
            <p className="mt-2">We may use cookies to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Understand and save user's preferences for future visits.</li>
              <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.</li>
              <li>Ensure the security and functionality of our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">3. Types of Cookies We Use</h2>
            <p><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.</p>
            <p className="mt-2"><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p>
            <p className="mt-2"><strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">4. Disabling Cookies</h2>
            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">5. More Information</h2>
            <p>Hopefully, that has clarified things for you. As was previously mentioned, if there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
            <p className="mt-2">If you are still looking for more information, then you can contact us through our preferred contact methods: Email: contact.neuramorphosis@gmail.com</p>
          </section>

          <div className="pt-6 text-center">
            <p className="text-sm text-foreground">
              <strong>Disclaimer:</strong> This is a template Cookie Policy and should be reviewed by a legal professional before publication.
            </p>
          </div>

          <div className="flex justify-center pt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
