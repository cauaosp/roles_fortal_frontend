import type { JournalProps } from "../model/types.ts";

const FALLBACK_PALETTE = [
  "var(--brand-cyan)",
  "var(--brand-coral)",
  "var(--brand-sun)",
  "var(--brand-tangerine)",
  "var(--brand-rose)",
  "var(--brand-leaf)",
  "var(--brand-grape)",
  "var(--brand-ocean)",
];

const JOURNAL_MAP: Record<string, {
  name: string;
  color: string;
}> = {
  opovo: {
    name: "O povo",
    color: "var(--brand-cyan)",
  },
  diariodonordeste: {
    name: "Diário do Nordeste",
    color: "var(--brand-sun)",
  },
  oestadoce: {
    name: "O Estado CE",
    color: "var(--brand-ocean)",
  },
  verdesmares: {
    name: "Verdes Mares",
    color: "var(--brand-leaf)",
  },
  cearaagora: {
    name: "Ceará Agora",
    color: "var(--brand-coral)",
  },
  tce: {
    name: "Tribunal de Contas do Ceará",
    color: "var(--brand-grape)",
  },
  portalterradaluz: {
    name: "Terra da Luz",
    color: "var(--brand-tangerine)",
  },
  jangadeiro: {
    name: "Jornal Jangadeiro",
    color: "var(--brand-rose)",
  },
};

function normalizeJournal(journal: string): string {
  return journal.trim().toLowerCase();
}

export function journalColor(journal: string): string {
  const normalized = normalizeJournal(journal);

  const directMatch = JOURNAL_MAP[normalized];

  if (directMatch) {
    return directMatch.color;
  }

  const nameMatch = Object.values(JOURNAL_MAP).find(
    (journal) => normalizeJournal(journal.name) === normalized
  );

  if (nameMatch) {
    return nameMatch.color;
  }

  let hash = 0;

  for (let i = 0; i < normalized.length; i++) {
    hash = (hash * 31 + normalized.charCodeAt(i)) % 9973;
  }

  return FALLBACK_PALETTE[hash % FALLBACK_PALETTE.length];
}


export function formatJournal(journal: string): string {
  return journal.trim().toUpperCase();
}

export function totalArticles(data: JournalProps): { journals: string[], totalArticles: number } {
  const journals: string[] = Object.keys(data ?? {});
  const totalArticles: number = journals.reduce((acc, key) => acc + data[key].length, 0);
  return { journals, totalArticles };

}
