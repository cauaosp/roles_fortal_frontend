
export type TokenRow = {
  name: string;
  value: string;
  usage: string;
};

export const colorTokens: TokenRow[] = [
  { name: "--background", value: "oklch(0.987 0.008 95)", usage: "Fundo da página (off-white quente)" },
  { name: "--foreground", value: "oklch(0.24 0.03 220)", usage: "Texto principal" },
  { name: "--card", value: "oklch(1 0 0)", usage: "Fundo dos cards" },
  { name: "--surface-raised", value: "oklch(0.975 0.012 95)", usage: "Faixas e blocos de apoio" },
  { name: "--muted-foreground", value: "oklch(0.52 0.02 220)", usage: "Texto secundário (autor, data)" },
  { name: "--border", value: "oklch(0.9 0.014 95)", usage: "Bordas e divisórias" },
  { name: "--primary", value: "oklch(0.55 0.11 213)", usage: "Ações e links" },
  { name: "--accent", value: "oklch(0.71 0.16 27)", usage: "Destaques quentes" },
];

export const brandTokens: TokenRow[] = [
  { name: "--brand-cyan", value: "#00bdd6", usage: "Cor de marca principal" },
  { name: "--brand-coral", value: "#ff6e61", usage: "Destaque quente" },
  { name: "--brand-sun", value: "#ffcc00", usage: "Selos e ênfase" },
  { name: "--brand-tangerine", value: "#ffb84d", usage: "Apoio em selos de jornal" },
  { name: "--brand-rose", value: "#ff4281", usage: "Ênfase forte" },
];

export const typeScale = [
  { name: "Display", token: "text-5xl / font-display", size: "3rem", weight: "400", sample: "Rolê Fortal" },
  { name: "Título de seção", token: "text-2xl / font-display", size: "1.5rem", weight: "400", sample: "Últimas do Ceará" },
  { name: "Título do card", token: "text-lg / font-sans 600", size: "1.125rem", weight: "600", sample: "Título da matéria" },
  { name: "Descrição", token: "text-sm / font-sans 400", size: "0.875rem", weight: "400", sample: "Resumo da matéria em uma ou duas linhas." },
  { name: "Metadados", token: "text-xs / font-sans 500", size: "0.75rem", weight: "500", sample: "Autor · 07/09/2026 · 12:30" },
  { name: "Selo", token: "text-[0.6875rem] / uppercase 600", size: "0.6875rem", weight: "600", sample: "O POVO" },
];

export const spacingScale = [
  { name: "xs", value: "0.25rem", usage: "Ajustes finos entre selo e texto" },
  { name: "sm", value: "0.5rem", usage: "Espaço interno entre metadados" },
  { name: "md", value: "0.75rem", usage: "Entre blocos dentro do card" },
  { name: "lg", value: "1.25rem", usage: "Padding do card e gap do mosaico" },
  { name: "xl", value: "2rem", usage: "Respiro entre cabeçalho e conteúdo" },
  { name: "2xl", value: "4rem", usage: "Margens verticais de seção" },
];

export const radiusScale = [
  { name: "--radius-sm", value: "0.375rem", usage: "Selos e pílulas pequenas" },
  { name: "--radius-md", value: "0.5rem", usage: "Elementos internos" },
  { name: "--radius-lg", value: "0.875rem", usage: "Cards de artigo" },
  { name: "--radius-xl", value: "1.25rem", usage: "Blocos de estatística" },
  { name: "--radius-2xl", value: "1.625rem", usage: "Áreas destacadas" },
];

export const shadowScale = [
  {
    name: "--shadow-card",
    value: "0 1px 2px rgba(…/6%), 0 6px 20px -12px rgba(…/22%)",
    usage: "Card em repouso",
  },
  {
    name: "--shadow-card-hover",
    value: "0 2px 4px rgba(…/8%), 0 18px 40px -18px rgba(…/32%)",
    usage: "Card sob o cursor",
  },
  {
    name: "--shadow-header",
    value: "0 1px 0 border, 0 10px 30px -24px rgba(…/45%)",
    usage: "Cabeçalho fixo",
  },
];
