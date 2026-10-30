"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
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
          
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Privacy Policy</h1>
          <p className="text-gray-600 text-lg mb-4">Last updated: October 30, 2026</p>
          
          <div className="bg-white/85 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-8 md:p-12 shadow-2xl shadow-brand-navy/10">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-bold text-brand-navy mt-0 mb-6">1. Introduction</h2>
              <p className="mb-6">
                Coreridge Technologies ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-6">2. Information We Collect</h2>
              <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you voluntarily provide</li>
                <li><strong>Usage Data:</strong> IP address, browser type, device information, and pages visited on our website</li>
                <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-6">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide, operate, and maintain our website and services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Improve our website and services based on your feedback</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-6">4. Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-6">5. Contact Us</h2>
              <p className="mb-0">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@coreridge.com<br />
                <strong>Address:</strong> Coreridge Technologies, Corporate Headquarters
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}