export type ArticleType = {
  titulo: string;
  subtitulo?: string | null;
  categoria?: string | string[] | null;
  autor?: string | null;
  dataPublicacao: string;
  link: string;
  jornal: string;
  createdAt?: string;
  created_at?: string;
};

export type JornalType = {
  [nomeDoJornal: string]: ArticleType[];
};

export type ApiResponse = JornalType;
