"use client";

import Script from "next/script";

declare global {
  interface Window {
    ConferbotWidget?: (widgetId: string, mode: string) => unknown;
  }
}

export default function ConferbotWidget() {
  return (
    <Script
      id="conferbot-js"
      src="https://cdn.conferbot.com/dist/v1/widget.min.js"
      strategy="afterInteractive"
      onReady={() => {
        if (!window.ConferbotWidget) {
          console.error("Conferbot script loaded without its widget initializer.");
          return;
        }

        window.ConferbotWidget("6adddf9c9d57e2fe90b7e5e6", "live_chat");
      }}
      onError={(error) => {
        console.error("Failed to load the Conferbot widget script:", error);
      }}
    />
  );
}
