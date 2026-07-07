import { buildWhatsappUrl, quickQuoteMessage } from "@/lib/products";

export function WhatsappFab() {
  return (
    <a
      href={buildWhatsappUrl(quickQuoteMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105 md:h-16 md:w-16"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" aria-hidden>
        <path d="M19.11 17.36c-.29-.15-1.7-.84-1.97-.94-.26-.1-.46-.15-.65.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.24-.57-.48-.49-.65-.5h-.55c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.4s1.02 2.78 1.16 2.97c.14.19 2 3.06 4.85 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM16.02 5.33C10.14 5.33 5.35 10.12 5.35 16c0 1.88.5 3.72 1.44 5.34L5.33 26.67l5.5-1.43a10.65 10.65 0 0 0 5.18 1.32h.01c5.88 0 10.67-4.79 10.67-10.67 0-2.85-1.11-5.53-3.13-7.55a10.6 10.6 0 0 0-7.54-3.12zm0 19.55h-.01a8.87 8.87 0 0 1-4.52-1.24l-.32-.19-3.26.85.87-3.18-.21-.33A8.87 8.87 0 0 1 7.13 16c0-4.9 3.99-8.89 8.89-8.89 2.37 0 4.6.93 6.28 2.61a8.83 8.83 0 0 1 2.6 6.28c0 4.9-3.99 8.89-8.88 8.89z" />
      </svg>
    </a>
  );
}
