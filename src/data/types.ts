export type ArticleType = {
  title: string;
  subtitle?: string | null;
  category?: string | string[] | null;
  author?: string | null;
  publicationDate?: string;
  link: string;
  journal: string;
  scraped_at?: string;
  created_at?: string;
};

export type JornalType = {
  [nomeDoJornal: string]: ArticleType[];
};

export type ApiResponse = JornalType;
