export type ArticleType = {
  title: string;
  subtitle?: string | null;
  category?: string | string[] | null;
  author?: string | null;
  publication_date?: string;
  link: string;
  journal: string;
  scraped_at?: string;
  created_at?: string;
};

export type JournalProps = {
  [journal_name: string]: ArticleType[];
};

export type GetArticlesResponse = { articles: ArticleType[]; journals: string[] }
