
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookLock } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-3xl mx-auto shadow-xl bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center mb-4">
            <BookLock className="h-10 w-10 text-primary mr-3" />
            <CardTitle className="text-3xl text-primary">Terms of Service</CardTitle>
          </div>
          <CardDescription>Last Updated: May 18, 2025</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">1. Agreement to Terms</h2>
            <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and NeuraMorphosis (“Company“, “we”, “us”, or “our”), concerning your access to and use of the [Your Website URL] website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).</p>
            <p className="mt-2">You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">2. Intellectual Property Rights</h2>
            <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">3. User Representations</h2>
            <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">4. Prohibited Activities</h2>
            <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
            <p className="mt-2">As a user of the Site, you agree not to: [List of prohibited activities - placeholder for actual list]</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">5. Term and Termination</h2>
            <p>These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">6. Modifications and Interruptions</h2>
            <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.</p>
            <p className="mt-2">We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">7. Governing Law</h2>
            <p>These Terms shall be governed by and defined following the laws of [Your Jurisdiction]. NeuraMorphosis and yourself irrevocably consent that the courts of [Your Jurisdiction] shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">8. Disclaimer</h2>
            <p>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">9. Limitation of Liability</h2>
            <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">10. Contact Us</h2>
            <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: contact.neuramorphosis@gmail.com.</p>
          </section>
          
          <div className="pt-6 text-center">
            <p className="text-sm text-foreground">
              <strong>Disclaimer:</strong> This is a template Terms of Service and should be reviewed by a legal professional before publication.
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
