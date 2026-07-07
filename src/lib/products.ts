import guardaSol from "@/assets/guarda-sol.jpg";
import ombrelone from "@/assets/ombrelone.jpg";
import ombreloneQuad from "@/assets/ombrelone-quadrado.jpg";
import tenda from "@/assets/tenda.jpg";
import guardaChuva from "@/assets/guarda-chuva.jpg";
import bases from "@/assets/bases.jpg";

export const WHATSAPP_NUMBER = "5511941953092";
export const WHATSAPP_DISPLAY = "(11) 94195-3092";
export const EMAIL = "megasombraoficial@outlook.com";
export const INSTAGRAM_URL = "https://www.instagram.com/megasombradobrasil/";
export const FACEBOOK_NAME = "Mega Sombra";
export const ADDRESS = "Av. Paulo Lincoln do Valle Pontin, 349 — Jaçanã, São Paulo/SP — 02273-010";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Paulo+Lincoln+do+Valle+Pontin,+349,+Ja%C3%A7an%C3%A3,+S%C3%A3o+Paulo";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  short: string;
  description: string;
  image: string;
  sizes: string[];
  colors: string[];
  specs: string[];
  category: string;
};

export const products: Product[] = [
  {
    slug: "guarda-sol",
    name: "Guarda-Sol",
    tagline: "Praia, piscina e áreas externas",
    short:
      "Guarda-sol profissional com armação em aço efeito mola, cobertura em Bagum (lona de PVC) ou KP.",
    description:
      "Ideal para praias, piscinas, quiosques e áreas externas. Estrutura leve, resistente e de fácil manuseio, com acabamento premium e diversas opções de cor.",
    image: guardaSol,
    sizes: ["1,60 m", "1,80 m", "2,00 m"],
    colors: ["Azul-marinho", "Azul", "Vermelho", "Verde", "Preto", "Branco", "Amarelo", "Laranja"],
    specs: [
      "Armação em aço 1.060 efeito mola com 8 varetas Ø 3,50–4,00 mm",
      "Haste central em alumínio trefilado (parede 0,8 a 1,00 mm)",
      "Reforço em madeira nas duas extremidades",
      "Cobertura em tecido Bagum (Lona PVC / poliéster) ou KP",
    ],
    category: "Guarda-sóis",
  },
  {
    slug: "ombrelone",
    name: "Ombrelone Redondo",
    tagline: "Elegância e sombra generosa",
    short:
      "Ombrelone com armação em madeira de lei tratada, 8 varetas e varão central Ø 32 mm. Com ou sem abas.",
    description:
      "Perfeito para restaurantes, bares, resorts, áreas de piscina e ambientes externos de alto padrão. Acabamento premium em madeira envernizada e cobertura em Bagum ou lona reforçada.",
    image: ombrelone,
    sizes: ["2,00 m", "2,40 m", "3,00 m"],
    colors: ["Azul-marinho", "Azul", "Preto", "Roxo", "Verde", "Vermelho", "Branco", "Bege"],
    specs: [
      "Armação em madeira de lei (dura) tratada e envernizada",
      "Verniz a prova d’água",
      "8 varetas e varão central Ø 32 mm",
      "Cobertura em tecido Bagum (Lona PVC/poliéster) ou lona",
      "Disponível com ou sem abas",
    ],
    category: "Ombrelones",
  },
  {
    slug: "ombrelone-quadrado",
    name: "Ombrelone Quadrado",
    tagline: "Design contemporâneo e cobertura ampla",
    short:
      "Ombrelone quadrado em madeira de lei, cobertura em Bagum ou lona reforçada. Ideal para áreas amplas.",
    description:
      "Linhas retas e sofisticadas para áreas gourmet, decks, restaurantes e espaços comerciais. Variações de 1,55×1,55 m até 4×4 m, com estrutura reforçada nos modelos maiores.",
    image: ombreloneQuad,
    sizes: ["1,55 × 1,55 m", "2 × 2 m", "3 × 3 m", "4 × 4 m"],
    colors: ["Azul-marinho", "Azul", "Preto", "Verde", "Vermelho", "Branco", "Bege"],
    specs: [
      "Armação em madeira de lei tratada e envernizada",
      "8 varetas com varão central Ø 32 mm (até 2×2 m)",
      "Varão reforçado Ø 54 mm nos modelos 3×3 m e 4×4 m",
      "Cobertura em Bagum ou laminado de PVC reforçado com poliéster",
      "Modelos 3×3 m e 4×4 m apenas sem abas",
    ],
    category: "Ombrelones",
  },
  {
    slug: "tenda",
    name: "Tenda Sanfonada",
    tagline: "Montagem rápida para eventos e feiras",
    short:
      "Tenda em alumínio oblongo com cobertura em laminado de PVC reforçado. Montagem sanfonada.",
    description:
      "Ideal para eventos, feiras, ações promocionais e áreas comerciais. Estrutura leve, robusta e de armar rápido. Sombreamento profissional (não indicada para chuva).",
    image: tenda,
    sizes: ["2 × 2 m", "3 × 3 m"],
    colors: ["Branco", "Preto", "Azul", "Vermelho", "Verde", "Amarelo"],
    specs: [
      "Estrutura interna em tubos de alumínio oblongo",
      "Cobertura em laminado de PVC reforçado com tecido de poliéster",
      "Montagem sanfonada (rápida)",
      "Uso: proteção solar (não recomendada para chuva)",
    ],
    category: "Coberturas",
  },
  {
    slug: "guarda-chuva",
    name: "Guarda-Chuva",
    tagline: "Resistente para uso comercial",
    short:
      "Guarda-chuva com 8 varetas em aço, cobertura em nylon 70 resinado. Ótimo para brindes e uniformes.",
    description:
      "Guarda-chuva profissional com estrutura reforçada e tecido resinado. Excelente para personalização corporativa, revendedores e uso institucional.",
    image: guardaChuva,
    sizes: ["1,40 m", "1,60 m"],
    colors: [
      "Azul-marinho",
      "Preto",
      "Vermelho",
      "Camuflado Aeronáutica",
      "Camuflado Exército",
      "Camuflado Tropa de Choque",
    ],
    specs: [
      "Armação com 8 varetas em aço 1040/1045 Ø 3,10 mm",
      "Cobertura em tecido nylon 70 resinado",
      "Personalização disponível para pedidos em quantidade",
    ],
    category: "Guarda-chuvas",
  },
  {
    slug: "bases",
    name: "Bases para Ombrelones",
    tagline: "Concreto, PVC e aço",
    short:
      "Bases resistentes para ombrelones e guarda-sóis: concreto, PVC preenchível ou disco de aço com pintura eletrostática.",
    description:
      "Escolha a base ideal para o seu produto e ambiente. Todas fabricadas com acabamento profissional e alta durabilidade.",
    image: bases,
    sizes: ["Ø 60 cm × 7 cm (concreto)", "Ø 60 cm × 7 cm (PVC)", "Ø 60 cm × 5 mm (aço)"],
    colors: ["Cinza concreto", "Preto (PVC)", "Preto pintura EPOXI"],
    specs: [
      "Base de CONCRETO: Ø 60 cm × 7 cm, ~38 kg, torre de aço Ø 32 mm",
      "Base de PVC: Ø 60 cm × 7 cm, torre PVC Ø 32 mm, preenchível com areia/água",
      "Base de AÇO: disco Ø 60 cm × 5 mm, tubo central Ø 32 mm, pintura eletrostática EPOXI PÓ",
    ],
    category: "Acessórios",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function quickQuoteMessage(productName?: string) {
  const base = productName
    ? `Olá! Tenho interesse em solicitar um orçamento do produto: ${productName}.`
    : `Olá! Gostaria de solicitar um orçamento com a Mega Sombra.`;
  return base;
}
