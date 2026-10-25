import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://coreridgetech.com'),
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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}