import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918008856333?text=Hello%20Coreridge%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Coreridge on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition hover:bg-[#1fb85a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E] sm:bottom-5 sm:right-5"
    >
      <MessageCircle aria-hidden="true" className="h-5 w-5" strokeWidth={2.2} />
    </a>
  );
}
