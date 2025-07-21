import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Logo from './Logo';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
          <h1 className="text-4xl md:text-5xl font-light mb-4">Privacy & Security</h1>
          <h2 className="text-3xl md:text-4xl font-light text-blue-400 mb-2">Privacy Policy</h2>
          <p className="text-gray-400">Last updated: July 21, 2025</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Our Commitment to Privacy</h3>
            <p className="text-gray-300 leading-relaxed">
              At Brisk Automations, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Information We Collect</h3>
            
            <h4 className="text-xl font-medium mb-3 text-white">Personal Information</h4>
            <p className="text-gray-300 mb-4">We may collect the following personal information:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Name, email address, and contact information</li>
              <li>Company name and business information</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
            </ul>

            <h4 className="text-xl font-medium mb-3 text-white">Technical Information</h4>
            <p className="text-gray-300 mb-4">We automatically collect certain technical information:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Usage patterns and analytics data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">How We Use Your Information</h3>
            <p className="text-gray-300 mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Providing and maintaining our automation services</li>
              <li>Processing payments and managing billing</li>
              <li>Communicating with you about our services</li>
              <li>Improving our services and developing new features</li>
              <li>Ensuring security and preventing fraud</li>
              <li>Complying with legal obligations</li>
              <li>Sending marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Information Sharing and Disclosure</h3>
            <p className="text-gray-300 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in providing our services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Data Security</h3>
            <p className="text-gray-300 mb-4">We implement industry-standard security measures to protect your personal information:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection practices</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
            <p className="text-gray-300">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Data Retention</h3>
            <p className="text-gray-300 mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p className="text-gray-300">
              When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Your Privacy Rights</h3>
            <p className="text-gray-300 mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Objection:</strong> Object to certain types of processing</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for processing</li>
            </ul>
            <p className="text-gray-300">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Cookies and Tracking</h3>
            <p className="text-gray-300 mb-4">We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and recommendations</li>
              <li>Improve our services and user experience</li>
            </ul>
            <p className="text-gray-300">
              You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Third-Party Services</h3>
            <p className="text-gray-300 mb-4">
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party services you access.
            </p>
            <p className="text-gray-300">
              We may integrate with third-party services for analytics, payment processing, and other business purposes. These integrations are governed by the respective privacy policies of those services.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Children's Privacy</h3>
            <p className="text-gray-300">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Changes to This Privacy Policy</h3>
            <p className="text-gray-300 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date.
            </p>
            <p className="text-gray-300">
              Your continued use of our services after any changes constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-medium mb-4 text-blue-400">Contact Us</h3>
            <p className="text-gray-300 mb-4">If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <p className="text-white font-medium mb-2">Brisk Automations</p>
              <p className="text-gray-300 mb-1">Email: privacy@briskautomations.com</p>
              <p className="text-gray-300 mb-1">Address: [Company Address]</p>
              <p className="text-gray-300">Phone: [Phone Number]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;