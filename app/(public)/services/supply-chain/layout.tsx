import { createPageMetadata } from "../../../../lib/seo-metadata";

export const metadata = createPageMetadata(
  "Supply Chain Technology Solutions",
  "Improve supply chain operations with technology for planning, inventory visibility, logistics, demand forecasting, and supplier collaboration.",
  "/services/supply-chain",
);

export default function SupplyChainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
