
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-3xl mx-auto shadow-xl bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center mb-4">
            <FileText className="h-10 w-10 text-primary mr-3" />
            <CardTitle className="text-3xl text-primary">Privacy Policy</CardTitle>
          </div>
          <CardDescription>Last Updated: May 18, 2025</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">1. Introduction</h2>
            <p>Welcome to NeuraMorphosis. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at contact.neuramorphosis@gmail.com.</p>
            <p className="mt-2">This privacy notice describes how we might use your information if you visit our website at [Your Website URL] or use our services. Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">2. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services or otherwise when you contact us.</p>
            <p className="mt-2">The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect may include the following: names, email addresses, contact preferences, and other similar information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">3. How We Use Your Information</h2>
            <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>To send administrative information to you.</li>
              <li>To protect our Services.</li>
              <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
              <li>To respond to legal requests and prevent harm.</li>
              <li>To deliver and facilitate delivery of services to the user.</li>
              <li>To respond to user inquiries/offer support to users.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">4. Will Your Information Be Shared With Anyone?</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">5. How Long Do We Keep Your Information?</h2>
            <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">6. How Do We Keep Your Information Safe?</h2>
            <p>We aim to protect your personal information through a system of organizational and technical security measures. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">7. Do We Collect Information From Minors?</h2>
            <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">8. What Are Your Privacy Rights?</h2>
            <p>In some regions (like the European Economic Area and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">9. Updates To This Notice</h2>
            <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">10. How Can You Contact Us About This Notice?</h2>
            <p>If you have questions or comments about this notice, you may email us at contact.neuramorphosis@gmail.com.</p>
          </section>
          
          <div className="pt-6 text-center">
            <p className="text-sm text-foreground">
              <strong>Disclaimer:</strong> This is a template Privacy Policy and should be reviewed by a legal professional before publication.
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
