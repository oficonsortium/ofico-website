
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Open Finance Consortium Inc ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or interact with our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Contact information (name, email address, organization)</li>
              <li>Communication preferences</li>
              <li>Membership-related information</li>
              <li>Feedback and correspondence</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Communicate with you about our initiatives and programs</li>
              <li>Process your membership applications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to trusted partners who assist us in operating our website and conducting our business.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have questions about this privacy policy or our practices, please contact us at privacy@oficonsortium.org.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Updates to This Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. The updated version will be indicated by the updated date at the top of this policy.
            </p>
            <p className="text-sm text-gray-500">Last updated: April 15, 2025</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
