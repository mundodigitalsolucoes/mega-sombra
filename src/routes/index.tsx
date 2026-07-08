import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Factory,
  Palette,
  Ruler,
  Building2,
  MessageCircle,
  Truck,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsappFab } from "@/components/site/WhatsappFab";
import {
  ADDRESS,
  EMAIL,
  MAPS_URL,
  WHATSAPP_DISPLAY,
  buildWhatsappUrl,
  products,
  quickQuoteMessage,
} from "@/lib/products";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mega Sombra — Fábrica de Ombrelones, Guarda-Sóis e Tendas Personalizadas" },
      {
        name: "description",
        content:
          "Fabricação própria de ombrelones, guarda-sóis, tendas, guarda-chuvas e bases sob medida. Produtos profissionais e personalizados para empresas, restaurantes, praias e eventos. Solicite orçamento pelo WhatsApp.",
      },
      { property: "og:title", content: "Mega Sombra — Ombrelones e Coberturas Personalizadas" },
      {
        property: "og:description",
        content:
          "Ombrelones, guarda-sóis, tendas e bases sob medida com fabricação própria. Orçamento rápido pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const differentials = [
  { icon: Factory, title: "Fabricação Própria", text: "Controle total de qualidade, do desenho ao produto final." },
  { icon: Palette, title: "Produtos Personalizados", text: "Cores, medidas e sua marca aplicada em ombrelones e tendas." },
  { icon: Ruler, title: "Diversas Cores e Medidas", text: "Ampla variedade para atender qualquer projeto ou ambiente." },
  { icon: Building2, title: "Atendimento a Empresas", text: "Soluções em escala para redes, resorts, eventos e comércios." },
  { icon: MessageCircle, title: "Orçamento Rápido no WhatsApp", text: "Resposta ágil com condições e prazos sob medida." },
  { icon: Truck, title: "Entrega Sob Consulta", text: "Logística para todo o Brasil conforme volume e destino." },
];

const reviews = [
  {
    name: "Rafael Andrade",
    role: "Restaurante Beira-Mar",
    text:
      "Compramos 12 ombrelones personalizados com nossa marca. Qualidade impecável e atendimento nota 10. Recomendo!",
  },
  {
    name: "Camila Souza",
    role: "Eventos Corporativos",
    text:
      "As tendas sanfonadas chegaram no prazo e ficaram lindas com nossa identidade visual. Serviço muito profissional.",
  },
  {
    name: "Marcos Lima",
    role: "Clube de Praia",
    text:
      "Guarda-sóis resistentes e com acabamento premium. Já é a segunda compra e continua superando expectativas.",
  },
  {
    name: "Fernanda Prado",
    role: "Hotel Boutique",
    text:
      "A equipe da Mega Sombra entendeu exatamente o que precisávamos. Ombrelones sob medida perfeitos para a piscina.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="topo" className="pt-20">
        <Hero />
        <Differentials />
        <ProductsSection />
        <Personalizacao />
        <Reviews />
        <Localizacao />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video
  className="h-full w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  poster={heroImg}
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      </div>

      <div className="container-page relative py-24 md:py-36">
        <div className="max-w-3xl fade-up">
           <h1 className="mt-5 font-display text-4xl leading-[1.05] text-white md:text-6xl">
            Fabricação de Ombrelones, Guarda-Sóis, Tendas e{" "}
            <span className="text-gold">Coberturas Personalizadas</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Produtos profissionais, personalizados e sob medida para empresas, comércios, eventos,
            praias, piscinas, restaurantes e áreas externas.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-[0_10px_30px_-10px_rgba(201,165,76,0.6)] transition-all hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Ver produtos <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={buildWhatsappUrl(quickQuoteMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" /> Pedir Orçamento
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { n: "10+", l: "anos de fábrica" },
              { n: "100%", l: "sob medida" },
              { n: "24h", l: "resposta rápida" },
              { n: "BR", l: "entregamos" },
            ].map((s) => (
              <div key={s.l} className="border-l border-gold/60 pl-4">
                <div className="font-display text-2xl text-white md:text-3xl">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Por que Mega Sombra</span>
          <h2 className="mt-4 font-display text-3xl text-navy md:text-4xl">
            Padrão premium em cada detalhe
          </h2>
          <p className="mt-4 text-muted-foreground">
            Do dimensionamento ao acabamento, cuidamos de cada peça para entregar produtos
            duráveis, elegantes e prontos para o uso profissional.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d) => (
            <div
              key={d.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-[var(--shadow-card)]"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gold/5 transition-all group-hover:bg-gold/10" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg text-navy">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="produtos" className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 60%, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-gold-soft">Linha de produtos</span>
          <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
            Sombra profissional para cada ambiente
          </h2>
          <p className="mt-4 text-white/70">
            Escolha o produto ideal, veja detalhes, medidas e cores disponíveis e solicite
            orçamento pelo WhatsApp em minutos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              to="/produtos/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy backdrop-blur">
                  {p.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl text-navy">{p.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gold">
                  {p.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.short}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">
                    {p.sizes.length} medidas • {p.colors.length}+ cores
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-gold">
                    Ver detalhes <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Personalizacao() {
  return (
    <section id="personalizacao" className="bg-white py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-gold/40" />
          <img
            src="/images/sua-marca-aqui.png"
            alt="Ombrelones personalizados em resort"
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
        <div>
          <span className="eyebrow">Personalização</span>
          <h2 className="mt-4 font-display text-3xl text-navy md:text-4xl">
            Sua marca em destaque em qualquer ambiente externo
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A Mega Sombra oferece ombrelones, guarda-sóis e tendas personalizados com a
            identidade visual da sua empresa. Aplicamos sua logo em cores, formatos e
            materiais premium — perfeito para reforçar a marca em ambientes externos.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Aplicação de logotipo em serigrafia ou sublimação",
              "Escolha de cores conforme identidade visual",
              "Kits para redes, franquias e eventos",
              "Amostras e mockups sob consulta",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-navy">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href={buildWhatsappUrl(
                "Olá! Tenho interesse em personalizar produtos Mega Sombra com a minha marca. Podem me ajudar?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-deep"
            >
              <Sparkles className="h-4 w-4 text-gold" />
              Personalizar meus produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="avaliacoes" className="bg-secondary py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Avaliações</span>
          <h2 className="mt-4 font-display text-3xl text-navy md:text-4xl">
            O que dizem nossos clientes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Depoimentos de empresas e clientes que já contam com a qualidade Mega Sombra.
          </p>
          <p className="mt-2 text-xs italic text-muted-foreground/80">
            (Depoimentos ilustrativos — serão substituídos pelas avaliações reais do Google.)
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-navy">“{r.text}”</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold text-navy">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Localizacao() {
  return (
    <section id="localizacao" className="bg-white py-20 md:py-28">
      <div className="container-page grid items-stretch gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <span className="eyebrow">Localização</span>
          <h2 className="mt-4 font-display text-3xl text-navy md:text-4xl">
            Nossa fábrica em São Paulo
          </h2>
          <p className="mt-5 text-muted-foreground">
            Estamos localizados em Jaçanã, São Paulo. Visitas mediante agendamento.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-navy">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>{ADDRESS}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <a
                href={buildWhatsappUrl(quickQuoteMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <a href={`mailto:${EMAIL}`} className="hover:text-gold break-all">
                {EMAIL}
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-deep"
            >
              <MapPin className="h-4 w-4 text-gold" />
              Ver rota no Google Maps
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
          <iframe
            title="Mega Sombra — Localização"
            src="https://www.google.com/maps?q=Av.+Paulo+Lincoln+do+Valle+Pontin,+349,+Ja%C3%A7an%C3%A3,+S%C3%A3o+Paulo&output=embed"
            className="h-full min-h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(201,165,76,0.35), transparent 60%), radial-gradient(circle at 80% 20%, rgba(201,165,76,0.15), transparent 50%)",
        }}
      />
      <div className="container-page relative text-center">
        <span className="eyebrow text-gold-soft">Vamos conversar</span>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight text-white md:text-5xl">
          Quer um orçamento personalizado para sua empresa?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/70">
          Nossa equipe está pronta para atender restaurantes, hotéis, clubes, eventos e projetos
          comerciais em todo o Brasil.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={buildWhatsappUrl(quickQuoteMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy shadow-[0_10px_40px_-10px_rgba(201,165,76,0.7)] transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com a Mega Sombra no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
