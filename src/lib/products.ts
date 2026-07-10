export const WHATSAPP_NUMBER = "5511941953092";
export const WHATSAPP_DISPLAY = "(11) 94195-3092";
export const EMAIL = "megasombraoficial@outlook.com";
export const INSTAGRAM_URL = "https://www.instagram.com/megasombradobrasil/";
export const INSTAGRAM_HANDLE = "@megasombradobrasil";
export const FACEBOOK_NAME = "Mega Sombra";
export const ADDRESS = "Av. Paulo Lincoln do Valle Pontin, 349 — Jaçanã, São Paulo/SP — 02273-010";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Paulo+Lincoln+do+Valle+Pontin,+349,+Ja%C3%A7an%C3%A3,+S%C3%A3o+Paulo";

export type ProductColor = {
  name: string;
  hex: string;
  image?: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  short: string;
  description: string;
  images: string[];
  sizes: string[];
  colors: ProductColor[];
  specs: string[];
  category: string;
};

const standardColors: ProductColor[] = [
  { name: "Azul-marinho", hex: "#0f2555" },
  { name: "Azul", hex: "#2563eb" },
  { name: "Vermelho", hex: "#dc2626" },
  { name: "Verde", hex: "#16a34a" },
  { name: "Preto", hex: "#111827" },
  { name: "Branco", hex: "#ffffff" },
  { name: "Amarelo", hex: "#facc15" },
  { name: "Laranja", hex: "#f97316" },
  { name: "Bege", hex: "#d6b98c" },
];

const chairFabricColors: ProductColor[] = [
  { name: "Verde", hex: "#13a45a" },
  { name: "Vermelho", hex: "#ef1f2d" },
  { name: "Azul", hex: "#2d55a4" },
  { name: "Amarelo", hex: "#ffdf27" },
  { name: "Laranja", hex: "#fb6b26" },
  { name: "Roxo", hex: "#813aa4" },
  { name: "Marrom", hex: "#794513" },
  { name: "Cinza", hex: "#70757a" },
  { name: "Preto", hex: "#1d1b1d" },
];

// Quando uma cor não possui `image`, as fotos disponíveis do produto não comprovam
// uma correspondência visual exclusiva para essa cor; o seletor permanece visual
// e a galeria mantém a imagem atual ao selecionar essa opção.

export const products: Product[] = [
  {
    slug: "ombrelone-redondo",
    name: "Ombrelone Redondo",
    tagline: "Elegância e sombra generosa",
    short: "Ombrelone redondo em madeira de lei tratada, com cobertura resistente e acabamento premium.",
    description: "Perfeito para restaurantes, bares, resorts, áreas de piscina e ambientes externos de alto padrão. Acabamento em madeira envernizada e cobertura em Bagum ou lona reforçada.",
    images: ["/images/produtos/ombrelone-redondo/ombrelone-redondo-01.png", "/images/produtos/ombrelone-redondo/ombrelone-redondo-02.png", "/images/produtos/ombrelone-redondo/ombrelone-redondo-03.png"],
    sizes: ["2,00 m", "2,40 m", "3,00 m"],
    colors: [
      { name: "Amarelo", hex: "#f6c21a" },
      { name: "Areia", hex: "#b5aa8f" },
      { name: "Azul", hex: "#2478c8", image: "/images/produtos/ombrelone-redondo/ombrelone-redondo-01.png" },
      { name: "Bege", hex: "#c6bb8f" },
      { name: "Branco", hex: "#ffffff" },
      { name: "Cinza", hex: "#465055" },
      { name: "Laranja", hex: "#cf6719" },
      { name: "Azul-marinho", hex: "#243f78" },
      { name: "Preto", hex: "#151a18" },
      { name: "Roxo", hex: "#633579" },
      { name: "Azul royal", hex: "#183aa6" },
      { name: "Verde", hex: "#087c52" },
      { name: "Verde escuro", hex: "#2a5a50" },
      { name: "Verde claro", hex: "#63df68" },
      { name: "Vermelho", hex: "#e43c3d" },
      { name: "Vinho", hex: "#7d1f38" },
    ],
    specs: ["Armação em madeira de lei dura tratada e envernizada", "Verniz à prova d’água", "8 varetas e varão central Ø 32 mm", "Cobertura especial em tecido Bagum (lona de PVC com trama de poliéster) ou lona", "Pode ser com ou sem abas"],
    category: "Ombrelones",
  },
  {
    slug: "ombrelone-quadrado",
    name: "Ombrelone Quadrado",
    tagline: "Design contemporâneo e cobertura ampla",
    short: "Ombrelone quadrado em madeira de lei, cobertura em Bagum ou lona reforçada para áreas amplas.",
    description: "Linhas retas e sofisticadas para áreas gourmet, decks, restaurantes e espaços comerciais. Estrutura reforçada nos modelos maiores.",
    images: ["/images/produtos/ombrelone-quadrado/ombrelone-qiadrado-01.png", "/images/produtos/ombrelone-quadrado/ombrelone-quadrado-02.png", "/images/produtos/ombrelone-quadrado/ombrelone-quadrado-03.png"],
    sizes: ["1,55 × 1,55 m", "2 × 2 m", "3 × 3 m", "4 × 4 m"],
    colors: [
      { name: "Azul", hex: "#2563eb", image: "/images/produtos/ombrelone-quadrado/ombrelone-qiadrado-01.png" },
      { name: "Azul-marinho", hex: "#0f2555" },
      { name: "Preto", hex: "#111827" },
      { name: "Verde", hex: "#16a34a" },
      { name: "Vermelho", hex: "#dc2626" },
      { name: "Branco", hex: "#ffffff" },
      { name: "Bege", hex: "#d6b98c" },
    ],
    specs: ["Armação em madeira de lei tratada e envernizada", "8 varetas com varão central Ø 32 mm (até 2×2 m)", "Varão reforçado Ø 54 mm nos modelos 3×3 m e 4×4 m", "Cobertura em Bagum ou laminado de PVC reforçado com poliéster", "Modelos 3×3 m e 4×4 m apenas sem abas"],
    category: "Ombrelones",
  },
  {
    slug: "guarda-sol",
    name: "Guarda-sol",
    tagline: "Praia, piscina e áreas externas",
    short: "Guarda-sol profissional com armação em aço efeito mola e cobertura em Bagum ou KP.",
    description: "Ideal para praias, piscinas e áreas externas. Estrutura leve, resistente e de fácil manuseio, com acabamento premium e diversas opções de cor.",
    images: ["/images/produtos/guarda-sol/guarda-sol-01.png", "/images/produtos/guarda-sol/guarda-sol-02.png", "/images/produtos/guarda-sol/guarda-sol-03.png"],
    sizes: ["1,60 m", "1,80 m", "2,00 m"],
    colors: [
      { name: "Amarelo", hex: "#f6c21a" },
      { name: "Areia", hex: "#b5aa8f" },
      { name: "Azul", hex: "#2478c8", image: "/images/produtos/guarda-sol/guarda-sol-02.png" },
      { name: "Bege", hex: "#c6bb8f" },
      { name: "Branco", hex: "#ffffff" },
      { name: "Cinza", hex: "#465055" },
      { name: "Laranja", hex: "#cf6719" },
      { name: "Azul-marinho", hex: "#243f78" },
      { name: "Preto", hex: "#151a18" },
      { name: "Roxo", hex: "#633579" },
      { name: "Azul royal", hex: "#183aa6" },
      { name: "Verde", hex: "#087c52", image: "/images/produtos/guarda-sol/guarda-sol-03.png" },
      { name: "Verde escuro", hex: "#2a5a50" },
      { name: "Verde claro", hex: "#63df68" },
      { name: "Vermelho", hex: "#e43c3d" },
      { name: "Vinho", hex: "#7d1f38" },
    ],
    specs: ["Armação em aço 1.060 efeito mola com 8 varetas Ø 3,50 a 4,00 mm", "Haste central em alumínio trefilado com parede de 0,8 a 1,00 mm", "Reforço de madeira nas duas extremidades", "Cobertura em tecido Bagum (lona de PVC com trama de poliéster) ou KP (lona)"],
    category: "Guarda-sóis",
  },
  {
    slug: "bases",
    name: "Bases para Ombrelones",
    tagline: "Concreto, PVC e aço",
    short: "Bases resistentes para ombrelones e guarda-sóis: concreto, PVC preenchível ou aço.",
    description: "Escolha a base ideal para o seu produto e ambiente. Todas fabricadas com acabamento profissional e alta durabilidade.",
    images: ["/images/produtos/bases/base-aco.png", "/images/produtos/bases/base-concreto.png", "/images/produtos/bases/base-pvc.png"],
    sizes: ["Ø 60 cm × 7 cm (concreto)", "Ø 60 cm × 7 cm (PVC)", "Ø 60 cm × 5 mm (aço)"],
    colors: [{ name: "Aço", hex: "#4b5563", image: "/images/produtos/bases/base-aco.png" }, { name: "Concreto", hex: "#c7dce6", image: "/images/produtos/bases/base-concreto.png" }, { name: "PVC preto", hex: "#1f2937", image: "/images/produtos/bases/base-pvc.png" }],
    specs: ["Base de concreto: diâmetro Ø 60 cm, 7 cm de altura, interior preenchido com concreto, peso aproximado de 38 kg e torre de aço fixada no centro de Ø 32 mm", "Base de PVC para guarda-sol: soprada, diâmetro Ø 60 cm, 7 cm de altura, torre de PVC Ø 32 mm fixada no centro, parede com variação de 1 mm a 1,3 mm", "Base de PVC: pode ser preenchida com areia ou areia e água", "Base de aço: disco de aço de Ø 60 cm, espessura 5 mm, com 2 furos entre chapas e tubo de aço Ø 32 mm soldado no centro", "Base de aço: acabamento em pintura eletrostática epoxi pó"],
    category: "Acessórios",
  },
  {
    slug: "tenda",
    name: "Tenda",
    tagline: "Montagem rápida para eventos e feiras",
    short: "Tenda em alumínio oblongo com cobertura em laminado de PVC reforçado.",
    description: "Ideal para eventos, feiras, ações promocionais e áreas comerciais. Estrutura leve, robusta e de armar rápido para sombreamento profissional.",
    images: ["/images/produtos/tenda/tenda-01.png", "/images/produtos/tenda/tenda-02.png", "/images/produtos/tenda/tenda-03.png"],
    sizes: ["2 × 2 m", "3 × 3 m"],
    colors: [
      { name: "Amarelo", hex: "#f6c21a" },
      { name: "Areia", hex: "#b5aa8f" },
      { name: "Azul", hex: "#2478c8", image: "/images/produtos/tenda/tenda-01.png" },
      { name: "Bege", hex: "#c6bb8f" },
      { name: "Branco", hex: "#ffffff" },
      { name: "Cinza", hex: "#465055" },
      { name: "Laranja", hex: "#cf6719", image: "/images/produtos/tenda/tenda-02.png" },
      { name: "Preto", hex: "#151a18" },
      { name: "Azul royal", hex: "#183aa6" },
      { name: "Verde", hex: "#087c52" },
      { name: "Caqui", hex: "#b9aa87" },
      { name: "Vermelho", hex: "#e43c3d" },
      { name: "Marrom", hex: "#5b483b" },
      { name: "Amarelo claro", hex: "#eded63" },
    ],
    specs: ["Estrutura interna toda em tubos de alumínio oblongo", "Cobertura em laminado de PVC reforçado com tecido de poliéster (lona)", "Montagem rápida tipo sanfonada", "Tenda para sol, não para chuva"],
    category: "Coberturas",
  },
  {
    slug: "guarda-chuva",
    name: "Guarda-chuva",
    tagline: "Resistente para uso comercial",
    short: "Guarda-chuva com 8 varetas em aço e cobertura em nylon 70 resinado.",
    description: "Guarda-chuva profissional com estrutura reforçada e tecido resinado. Excelente para personalização corporativa, revendedores e uso institucional.",
    images: ["/images/produtos/guarda-chuva/guarda-chuva-01.png", "/images/produtos/guarda-chuva/guarda-chuva-02.png", "/images/produtos/guarda-chuva/guarda-chuva-03.png"],
    sizes: ["1,40 m", "1,60 m"],
    colors: [
      { name: "Amarelo", hex: "#f6c21a" },
      { name: "Areia", hex: "#b5aa8f" },
      { name: "Azul", hex: "#2478c8" },
      { name: "Bege", hex: "#c6bb8f" },
      { name: "Pink", hex: "#ec1498" },
      { name: "Rosa", hex: "#c73a78" },
      { name: "Rosa claro", hex: "#cfc1c1" },
      { name: "Azul claro", hex: "#5dc0e4" },
      { name: "Verde escuro", hex: "#2a5a50" },
      { name: "Verde claro", hex: "#63df68" },
      { name: "Branco", hex: "#ffffff" },
      { name: "Cinza", hex: "#465055" },
      { name: "Laranja", hex: "#cf6719", image: "/images/produtos/guarda-chuva/guarda-chuva-01.png" },
      { name: "Azul-marinho", hex: "#243f78" },
      { name: "Vinho", hex: "#7d1f38", image: "/images/produtos/guarda-chuva/guarda-chuva-02.png" },
      { name: "Azul bebê", hex: "#b7d9e8" },
      { name: "Roxo escuro", hex: "#351930" },
      { name: "Azul noite", hex: "#17264d" },
      { name: "Vermelho", hex: "#e43c3d" },
      { name: "Bordô", hex: "#701d35" },
      { name: "Preto", hex: "#151a18" },
      { name: "Roxo", hex: "#633579" },
      { name: "Azul royal", hex: "#183aa6" },
      { name: "Verde", hex: "#087c52" },
      { name: "Marrom", hex: "#5b483b" },
      { name: "Caqui", hex: "#a89e82" },
      { name: "Amarelo claro", hex: "#eded63" },
      { name: "Dourado", hex: "#b48e07" },
      { name: "Turquesa", hex: "#2edfc0" },
      { name: "Camuflado Aeronáutica", hex: "#4b4a37" },
      { name: "Camuflado Exército", hex: "#68734c" },
      { name: "Camuflado Tropa de Choque", hex: "#6b6f72" },
    ],
    specs: ["Armação com 8 varetas em aço 1040 a 1045 com Ø 3,10 mm", "Cobertura em tecido nylon 70 resinado"],
    category: "Guarda-chuvas",
  },
  {
    slug: "cadeira-encosto-fixo",
    name: "Cadeira Encosto Fixo",
    tagline: "Praticidade para áreas externas",
    short: "Cadeira de praia com encosto fixo, estrutura resistente e tecido confortável.",
    description: "Opção prática para praia, piscina, clubes e ações promocionais, com boa durabilidade e acabamento preparado para uso externo.",
    images: ["/images/produtos/cadeira-encosto-fixo/cadeira-encosto-fixo-01.png", "/images/produtos/cadeira-encosto-fixo/cadeira-encosto-fixo-02.png", "/images/produtos/cadeira-encosto-fixo/cadeira-encosto-fixo-03.png"],
    sizes: ["89 × 57 × 59 × 40 cm (h × c × l × ha)"],
    colors: chairFabricColors,
    specs: ["Cadeira fabricada com encosto alto fixo", "Confeccionada em tecido poliéster PVC", "Estrutura em alumínio com tubulação de 7/8 de polegada", "Peso recomendado até 100 kg", "Embalagem com 5 unidades"],
    category: "Cadeiras",
  },
  {
    slug: "cadeira-reclinavel",
    name: "Cadeira Reclinável",
    tagline: "Conforto ajustável",
    short: "Cadeira reclinável para lazer e descanso, com estrutura reforçada para uso externo.",
    description: "Modelo confortável para praia, piscina e áreas de lazer, com regulagem de inclinação e acabamento resistente.",
    images: ["/images/produtos/cadeira-reclinavel/cadeiras-reclinavel-01.png", "/images/produtos/cadeira-reclinavel/cadeiras-reclinavel-02.png", "/images/produtos/cadeira-reclinavel/cadeiras-reclinavel-03.png"],
    sizes: ["72 × 57 × 84 × 22 cm (h × c × l × ha)"],
    colors: chairFabricColors,
    specs: ["Cadeira fabricada com apoio de cabeça e 5 posições de ajuste", "Confeccionada em tecido poliéster PVC", "Estrutura em alumínio com tubulação de 1 polegada", "Peso recomendado até 120 kg", "Embalagem com 5 unidades"],
    category: "Cadeiras",
  },
  {
    slug: "cadeira-master-conforto-oversize",
    name: "Cadeira Master Conforto Oversize",
    tagline: "Mais espaço e conforto",
    short: "Cadeira oversize com foco em conforto, estabilidade e resistência para uso externo.",
    description: "Produto robusto para quem busca mais conforto em praia, clubes, piscinas e áreas de lazer, com estrutura reforçada e acabamento premium.",
    images: ["/images/produtos/cadeira-master-conforto-oversize/cadeira-master conforto-oversize-01.png", "/images/produtos/cadeira-master-conforto-oversize/cadeira-master conforto-oversize-02.png", "/images/produtos/cadeira-master-conforto-oversize/cadeira-master conforto-oversize-03.png"],
    sizes: ["89 × 68 × 67 × 42 cm (h × c × l × ha)"],
    colors: chairFabricColors,
    specs: ["Estrutura em alumínio com tubulação de 1 polegada oversize para maior conforto", "Tamanho maior que o usual", "Confeccionada em tecido poliéster PVC", "Possui encosto fixo", "Peso recomendado até 140 kg", "Embalagem com 5 unidades"],
    category: "Cadeiras",
  },
  {
    slug: "banquinho",
    name: "Banquinho",
    tagline: "Leve, compacto e funcional",
    short: "Banquinho dobrável para apoio em áreas externas, eventos e lazer.",
    description: "Acessório leve e prático para compor kits de praia, ações promocionais e espaços externos, com fácil transporte e armazenamento.",
    images: ["/images/produtos/banquinhos/banquinho-01.png", "/images/produtos/banquinhos/banquinho-02.png", "/images/produtos/banquinhos/banquinho-03.png"],
    sizes: ["Padrão"],
    colors: standardColors.filter((c) => ["Azul", "Vermelho", "Verde", "Preto", "Branco"].includes(c.name)),
    specs: ["Dobrável", "Leve e compacto", "Fácil transporte", "Uso em áreas externas"],
    category: "Acessórios",
  },
];

export const legacyProductSlugs: Record<string, string> = { ombrelone: "ombrelone-redondo", banquinhos: "banquinho" };

export function getProduct(slug: string) {
  const normalizedSlug = legacyProductSlugs[slug] ?? slug;
  return products.find((p) => p.slug === normalizedSlug);
}

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function quickQuoteMessage(productName?: string) {
  return productName
    ? `Olá! Tenho interesse em solicitar um orçamento do produto: ${productName}.`
    : "Olá! Gostaria de solicitar um orçamento com a Mega Sombra.";
}
