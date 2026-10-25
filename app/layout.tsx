import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://coreridgetech.com'),
  title: {
    default: "Coreridge Technologies | Enterprise Technology Partner",
    template: "%s | Coreridge Technologies",
  },
  description: "Architecting Next-Gen Enterprise Tech. Validating Core Systems. AI Solutions, IT Infrastructure, Cybersecurity, Application Development, and Computer System Validation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Coreridge Technologies",
    title: "Coreridge Technologies | Enterprise Technology Partner",
    description: "Architecting Next-Gen Enterprise Tech. Validating Core Systems.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Coreridge Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coreridge Technologies | Enterprise Technology Partner",
    description: "Architecting Next-Gen Enterprise Tech. Validating Core Systems.",
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