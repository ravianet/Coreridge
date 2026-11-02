import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Coreridge Technologies",
  url: "https://coreridgetech.com",
  logo: "https://coreridgetech.com/logos/cr1.png",
  email: "info@coreridgetech.com",
  telephone: "+918008856333",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500090",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/company/coreridge-technologies"],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://coreridgetech.com'),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-64x64.png", type: "image/png", sizes: "64x64" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Coreridge",
    statusBarStyle: "default",
  },
  title: {
    default: "Coreridge Technologies | Build, Transform, Secure, Validate",
    template: "%s | Coreridge Technologies",
  },
  description: "Coreridge Technologies helps organizations build resilient IT infrastructure, transform with AI and software, strengthen cybersecurity, and validate critical systems.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Coreridge Technologies",
    title: "Coreridge Technologies | Build, Transform, Secure, Validate",
    description: "IT infrastructure, AI and software transformation, cybersecurity, and computer system validation for organizations.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Coreridge Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coreridge Technologies | Build, Transform, Secure, Validate",
    description: "IT infrastructure, AI and software transformation, cybersecurity, and computer system validation for organizations.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}