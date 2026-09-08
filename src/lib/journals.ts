import type { JournalProps } from "../model/types.ts";

const PALETTE = [
  "var(--brand-cyan)",
  "var(--brand-coral)",
  "var(--brand-sun)",
  "var(--brand-tangerine)",
  "var(--brand-rose)",
];

export function journalColor(journal: string): string {
  let hash = 0;
  for (let i = 0; i < journal.length; i++) {
    hash = (hash * 31 + journal.charCodeAt(i)) % 9973;
  }
  return PALETTE[hash % PALETTE.length] as string;
}

export function formatJournal(journal: string): string {
  return journal.trim().toUpperCase();
}

export function totalArticles(data: JournalProps): { journals: string[], totalArticles: number } {
  const journals: string[] = Object.keys(data ?? {});
  const totalArticles: number = journals.reduce((acc, key) => acc + data[key].length, 0);
  return { journals, totalArticles };

}
