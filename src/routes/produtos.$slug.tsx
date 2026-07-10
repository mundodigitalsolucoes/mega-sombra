import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Ruler, Palette, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsappFab } from "@/components/site/WhatsappFab";
import { buildWhatsappUrl, getProduct, products, type Product } from "@/lib/products";

export const Route = createFileRoute("/produtos/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Produto não encontrado — Mega Sombra" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — Mega Sombra`;
    const description = product.short;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/produtos/${product.slug}` }],
    };
  },
  component: ProductPage,
  notFoundComponent: ProductNotFound,
});

function ProductNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-page pt-40 pb-24 text-center">
        <h1 className="font-display text-4xl text-navy">Produto não encontrado</h1>
        <p className="mt-3 text-muted-foreground">Verifique se o link está correto.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar à home
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [qty, setQty] = useState(1);
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setSelectedImage(product.images[0]);
    setSize(product.sizes[0]);
    setColor(product.colors[0]?.name ?? "");
  }, [product]);

  const whatsappHref = useMemo(() => {
    const msg = [
      "Olá, tenho interesse em solicitar um orçamento:",
      `Produto: ${product.name}`,
      `Medida: ${size}`,
      `Cor: ${color}`,
      `Quantidade: ${qty}`,
      `Observações: ${notes || "-"}`,
      `Nome: ${name || "-"}`,
      `Cidade: ${city || "-"}`,
    ].join("\n");
    return buildWhatsappUrl(msg);
  }, [product.name, size, color, qty, notes, name, city]);

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-secondary/40">
          <div className="container-page flex items-center gap-2 py-4 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-navy">Início</Link>
            <span>/</span>
            <Link to="/" hash="produtos" className="hover:text-navy">Produtos</Link>
            <span>/</span>
            <span className="text-navy">{product.name}</span>
          </div>
        </div>

        <section className="bg-white py-14 md:py-20">
          <div className="container-page grid gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border-2 border-gold/40" />
              <div className="relative overflow-hidden rounded-2xl bg-secondary shadow-[var(--shadow-elegant)]">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="aspect-square w-full object-cover transition-opacity duration-300"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="relative mt-4 grid grid-cols-3 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    aria-label={`Ver imagem ${index + 1} de ${product.name}`}
                    onClick={() => setSelectedImage(image)}
                    className={`overflow-hidden rounded-xl border-2 bg-secondary transition-all ${selectedImage === image ? "border-gold ring-2 ring-gold/30" : "border-transparent hover:border-gold/60"}`}
                  >
                    <img src={image} alt={`${product.name} - imagem ${index + 1}`} className="aspect-square w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="eyebrow">{product.category}</span>
              <h1 className="mt-4 font-display text-4xl text-navy md:text-5xl">{product.name}</h1>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-gold">
                {product.tagline}
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <div className="mt-8 grid gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <Ruler className="h-4 w-4 text-gold" /> Medida
                  </label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.sizes.map((s: string) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSize(s)}
                        className={`rounded-full border px-4 py-2 text-sm transition-all ${
                          size === s
                            ? "border-navy bg-navy text-white"
                            : "border-border bg-white text-navy hover:border-navy"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <Palette className="h-4 w-4 text-gold" /> Cor
                  </label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.colors.map((c) => {
                      const active = color === c.name;
                      return (
                        <button
                          key={c.name}
                          type="button"
                          aria-label={`Selecionar cor ${c.name}`}
                          aria-pressed={active}
                          onClick={() => {
                            setColor(c.name);
                            if (c.image) setSelectedImage(c.image);
                          }}
                          className={`inline-flex items-center gap-2 rounded-full border bg-white px-3 py-2 text-sm text-navy transition-all ${active ? "border-gold ring-2 ring-gold/40" : "border-border hover:border-navy"}`}
                        >
                          <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/10" style={{ backgroundColor: c.hex }}>
                            {active && <Check className="h-3 w-3 text-white drop-shadow" />}
                          </span>
                          {c.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-navy">Quantidade</label>
                    <input
                      type="number"
                      min={1}
                      value={qty}
                      onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                      className="mt-2 w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-navy focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy">Cidade</label>
                    <input
                      type="text"
                      placeholder="Ex: São Paulo/SP"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="mt-2 w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-navy focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-navy">Seu nome</label>
                  <input
                    type="text"
                    placeholder="Como devemos te chamar?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-navy focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-navy">Observações</label>
                  <textarea
                    rows={3}
                    placeholder="Personalização, logotipo, prazos, etc."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-2 w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-navy focus:border-gold focus:outline-none"
                  />
                </div>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  Solicitar orçamento pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="bg-secondary py-16">
          <div className="container-page grid gap-10 lg:grid-cols-3">
            <div>
              <span className="eyebrow">Especificações técnicas</span>
              <h2 className="mt-3 font-display text-2xl text-navy md:text-3xl">
                Feito para durar e impressionar
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Materiais selecionados, fabricação própria e acabamento premium em cada peça.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul className="grid gap-3 sm:grid-cols-2">
                {product.specs.map((s: string) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 text-sm text-navy shadow-sm"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="bg-white py-16">
          <div className="container-page">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="eyebrow">Outros produtos</span>
                <h2 className="mt-3 font-display text-2xl text-navy md:text-3xl">
                  Também podem te interessar
                </h2>
              </div>
              <Link
                to="/"
                hash="produtos"
                className="hidden items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold sm:inline-flex"
              >
                Ver todos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/produtos/$slug"
                  params={{ slug: p.slug }}
                  className="group overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-navy">{p.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-gold">{p.tagline}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold">
                      Ver detalhes <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16">
          <div className="container-page flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-4">
              <Sparkles className="h-8 w-8 text-gold" />
              <div>
                <h3 className="font-display text-xl text-white md:text-2xl">
                  Precisa de algo sob medida?
                </h3>
                <p className="text-sm text-white/70">
                  Personalize {product.name.toLowerCase()} com a marca da sua empresa.
                </p>
              </div>
            </div>
            <a
              href={buildWhatsappUrl(
                `Olá! Quero personalizar ${product.name} com a marca da minha empresa.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsappFab />
    </div>
  );
}
