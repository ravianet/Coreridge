export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918008856333?text=Hello%20Coreridge%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Coreridge on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_3px_12px_rgba(18,140,126,0.28)] transition hover:scale-105 hover:bg-[#1fb85a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E] sm:bottom-5 sm:right-5"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px] fill-current"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .15 5.34.15 11.91c0 2.1.55 4.16 1.6 5.97L.05 24l6.27-1.65a11.94 11.94 0 0 0 5.74 1.46h.01c6.57 0 11.92-5.34 11.92-11.91 0-3.18-1.24-6.17-3.47-8.42ZM12.07 21.8a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.87 9.87 0 0 1-1.52-5.29c0-5.47 4.45-9.91 9.9-9.91 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.9-9.91 9.9Zm5.43-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
