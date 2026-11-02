import { permanentRedirect } from "next/navigation";

export default function LegacyClientsPage(): never {
  permanentRedirect("/clients");
}
