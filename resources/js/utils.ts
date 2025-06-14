import { endOfWeek, isThisWeek, isToday, isWithinInterval, isYesterday, parseISO, startOfWeek, subWeeks } from "date-fns";
import { Article } from "./types/article";

export function formatDate(datetime: string) {
  const date = new Date(datetime);

  return (
    date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }) +
    " às " +
    date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
}

function isLastWeek(date: Date): boolean {
  const start = startOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 1 });
  const end = endOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 1 });
  return isWithinInterval(date, { start, end });
}

export function groupArticlesByDate(articles: Article[]) {
  return {
    today: articles.filter((a) => isToday(parseISO(a.created_at))),
    yesterday: articles.filter((a) => isYesterday(parseISO(a.created_at))),
    thisWeek: articles.filter(
      (a) => isThisWeek(parseISO(a.created_at), { weekStartsOn: 1 }) && !isToday(parseISO(a.created_at)) && !isYesterday(parseISO(a.created_at)),
    ),
    lastWeek: articles.filter((a) => isLastWeek(parseISO(a.created_at))),
  };
}
