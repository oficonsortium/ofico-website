import React from 'react';
import Layout from '../components/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the Open Finance Consortium Inc website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Description of Services</h2>
              <p className="mb-4">
                Open Finance Consortium Inc provides resources, information, and services related to open finance technologies and standards. Our services include but are not limited to membership programs, educational resources, and collaborative initiatives.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Membership Terms</h2>
              <p className="mb-4">Members agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Participate in consortium activities in good faith</li>
                <li>Maintain confidentiality of sensitive information</li>
                <li>Adhere to our code of conduct</li>
                <li>Pay applicable membership fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="mb-4">
                All content on this website, including but not limited to text, graphics, logos, and images, is the property of Open Finance Consortium Inc and is protected by intellectual property laws. Members retain ownership of their own intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p className="mb-4">
                Open Finance Consortium Inc shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Modifications</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. We will notify members of any material changes via email or through our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Governing Law</h2>
              <p className="mb-4">
                These terms are governed by and construed in accordance with the laws of the United States. Any disputes shall be subject to the exclusive jurisdiction of the courts in the state of our primary business location.
              </p>
              <p className="text-sm text-gray-500">Last updated: April 16, 2025</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
