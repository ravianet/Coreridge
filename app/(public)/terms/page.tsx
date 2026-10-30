"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-brand-navy mb-8 hover:underline"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Terms of Service</h1>
          <p className="text-gray-600 text-lg mb-4">Last updated: October 30, 2026</p>
          
          <div className="bg-white/85 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-8 md:p-12 shadow-2xl shadow-brand-navy/10">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-bold text-brand-navy mt-0 mb-6">1. Agreement to Terms</h2>
              <p className="mb-6">
                By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-6">2. Use License</h2>
              <p className="mb-4">Permission is granted to temporarily view the materials on Coreridge Technologies' website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-6">3. Disclaimer</h2>
              <p className="mb-6">
                The materials on Coreridge Technologies' website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-6">4. Limitations</h2>
              <p className="mb-6">
                In no event shall Coreridge Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-6">5. Accuracy of Materials</h2>
              <p className="mb-6">
                The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
              </p>

              <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-6">6. Links</h2>
              <p className="mb-6">
                Coreridge Technologies has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
              </p>

              <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-6">7. Modifications</h2>
              <p className="mb-6">
                We may revise these terms of service for our website at any time without notice. By using this website you agree to be bound by the current version of these terms of service.
              </p>

              <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-6">8. Contact Us</h2>
              <p className="mb-0">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> legal@coreridge.com<br />
                <strong>Address:</strong> Coreridge Technologies, Corporate Headquarters
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}