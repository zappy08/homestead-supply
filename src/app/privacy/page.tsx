import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Homestead Supply & More',
  description: 'Privacy policy for Homestead Supply & More.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#1e3a5f] mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Introduction</h2>
            <p>
              Homestead Supply & More (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
              committed to protecting your personal information. This Privacy Policy explains
              how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact Information:</strong> When you contact us, we may collect your
                name, email address, and any other information you provide.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect information about how you
                interact with our website, including pages visited, time spent, and referring URLs.
              </li>
              <li>
                <strong>Device Information:</strong> We may collect information about your device,
                including browser type, operating system, and IP address.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and user experience</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Third-Party Services</h2>
            <p>
              Our website links to Amazon.com for purchases. When you click through to Amazon,
              you are subject to Amazon&apos;s privacy policy and terms of service. We encourage
              you to review Amazon&apos;s privacy practices before making purchases.
            </p>
            <p className="mt-4">
              We may use analytics services (such as Google Analytics) to understand how visitors
              use our website. These services may collect information about your visits.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Cookies</h2>
            <p>
              We may use cookies and similar tracking technologies to enhance your experience
              on our website. You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information. However,
              no method of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal
              information, including the right to access, correct, or delete your data.
              Contact us to exercise these rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new policy on this page with an updated date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> support@homesteadsupplyandmore.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
