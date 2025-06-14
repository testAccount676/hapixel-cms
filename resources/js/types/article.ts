import { Link } from ".";

export type Article = {
  id: number;
  author_id: string;
  created_at: string;
  image: string;
  long_story: string;
  title: string;
  short_story: string;
  updated_at: string;
  author: {
    id: number;
    username: string;
    figure?: string;
  };
};

export type GroupedArticles = {
  today: Article[];
  yesterday: Article[];
  thisWeek: Article[];
  lastWeek: Article[];
};

export interface ArticlesPagePaginationProps {
  current_page: number;
  data: Article[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
