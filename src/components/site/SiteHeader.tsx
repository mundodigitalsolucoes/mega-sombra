import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { buildWhatsappUrl, quickQuoteMessage } from "@/lib/products";

const NAV = [
  { label: "Home", href: "/#topo" },
  { label: "Produtos", href: "/#produtos" },
  { label: "Personalização", href: "/#personalizacao" },
  { label: "Avaliações", href: "/#avaliacoes" },
  { label: "Localização", href: "/#localizacao" },
  { label: "Contato", href: "/#contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_4px_20px_-8px_rgba(15,37,85,0.15)] backdrop-blur"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-25 items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src="/images/logo-mega-sombra.png"
            alt="Mega Sombra"
            className="h-20 w-auto md:h-27 translate-y-1"
            width={180}
            height={120}
          />
          <span className="sr-only">Mega Sombra</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-navy transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={buildWhatsappUrl(quickQuoteMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(15,37,85,0.5)] transition-all hover:-translate-y-0.5 hover:bg-navy-deep"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar orçamento
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-navy hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={buildWhatsappUrl(quickQuoteMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
