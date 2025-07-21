import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Logo from './Logo';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <Logo className="w-32 h-8" variant="light" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-light mb-4">Legal Documentation</h1>
          <h2 className="text-3xl md:text-4xl font-light text-blue-400 mb-2">Terms of Service</h2>
          <p className="text-gray-400">Last updated: July 21, 2025</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Agreement to Terms</h3>
            <p className="text-gray-300 leading-relaxed">
              These Terms of Service ("Terms") govern your use of Brisk Automations' website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Description of Services</h3>
            <p className="text-gray-300 mb-4">Brisk Automations provides automation solutions including but not limited to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Lead generation and customer acquisition systems</li>
              <li>Recruiting automation and candidate screening</li>
              <li>Cloud infrastructure orchestration and optimization</li>
              <li>Custom automation model development and training</li>
              <li>Business process automation consulting</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">User Responsibilities</h3>
            <p className="text-gray-300 mb-4">By using our services, you agree to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide accurate and complete information when requested</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful purposes and in accordance with these Terms</li>
              <li>Not attempt to gain unauthorized access to our systems or networks</li>
              <li>Not use our services to transmit harmful, offensive, or illegal content</li>
              <li>Comply with all applicable laws and regulations in your jurisdiction</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Intellectual Property Rights</h3>
            <p className="text-gray-300 mb-4">
              The services, including all content, features, and functionality, are owned by Brisk Automations and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-300">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our content without our prior written consent.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Payment and Billing</h3>
            <p className="text-gray-300 mb-4">
              Payment terms are established in individual service agreements. All fees are non-refundable unless otherwise specified in writing. We reserve the right to suspend or terminate services for non-payment.
            </p>
            <p className="text-gray-300">
              Prices are subject to change with 30 days' notice. Continued use of services after price changes constitutes acceptance of new pricing.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Limitation of Liability</h3>
            <p className="text-gray-300 mb-4">
              To the maximum extent permitted by law, Brisk Automations shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            <p className="text-gray-300">
              Our total liability to you for all claims arising from or relating to these Terms or our services shall not exceed the amount paid by you to us in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Termination</h3>
            <p className="text-gray-300 mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms.
            </p>
            <p className="text-gray-300">
              Upon termination, your right to use our services will cease immediately. All provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Governing Law</h3>
            <p className="text-gray-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Brisk Automations is incorporated, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-300">
              Any disputes arising from these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Changes to Terms</h3>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website and updating the "Last updated" date.
            </p>
            <p className="text-gray-300">
              Your continued use of our services after any such changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you must discontinue use of our services.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Contact Information</h3>
            <p className="text-gray-300 mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <p className="text-white font-medium mb-2">Brisk Automations</p>
              <p className="text-gray-300 mb-1">Email: legal@briskautomations.com</p>
              <p className="text-gray-300">Address: [Company Address]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;