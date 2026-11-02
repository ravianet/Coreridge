import { permanentRedirect } from "next/navigation";

export default function LegacyAboutPage(): never {
  permanentRedirect("/company/about-us");
}
