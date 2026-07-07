import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";
import {
  ADDRESS,
  EMAIL,
  FACEBOOK_NAME,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Mega Sombra" className="h-16 w-auto" />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Fabricação própria de ombrelones, guarda-sóis, tendas, guarda-chuvas e bases.
            Produtos profissionais, sob medida e personalizados para empresas, comércios,
            eventos e áreas externas.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-white">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-gold">
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${EMAIL}`} className="hover:text-gold break-all">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>@megasombraombrelone</span>
            </li>
            <li className="flex items-start gap-3">
              <Facebook className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{FACEBOOK_NAME}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white">Endereço</h4>
          <p className="mt-4 flex items-start gap-3 text-sm text-white/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>{ADDRESS}</span>
          </p>
          <h4 className="mt-8 font-display text-lg text-white">Produtos</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/produtos/$slug" params={{ slug: "ombrelone" }} className="hover:text-gold">Ombrelones</Link></li>
            <li><Link to="/produtos/$slug" params={{ slug: "guarda-sol" }} className="hover:text-gold">Guarda-Sóis</Link></li>
            <li><Link to="/produtos/$slug" params={{ slug: "tenda" }} className="hover:text-gold">Tendas</Link></li>
            <li><Link to="/produtos/$slug" params={{ slug: "bases" }} className="hover:text-gold">Bases</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Mega Sombra. Todos os direitos reservados.</p>
          <p>Fabricação própria • São Paulo/SP</p>
        </div>
      </div>
    </footer>
  );
}
