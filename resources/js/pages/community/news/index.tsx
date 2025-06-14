import Pagination from "@/components/pagination";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { ArticlesPagePaginationProps } from "@/types/article";
import { Head, router } from "@inertiajs/react";
import { motion } from "framer-motion";
import debounce from "lodash/debounce";
import { useRef } from "react";

interface ArticlesPageProps {
  articles: ArticlesPagePaginationProps;
}

export default function News(props: ArticlesPageProps) {
  const handleArticleSearch = useRef(
    debounce((query: string) => {
      router.get("/community/news", { search: query }, { preserveState: true, replace: true });
    }, 500),
  ).current;

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleArticleSearch(value);
  };

  return (
    <>
      <AppLayout>
        <Head title="Notícias" />

        <div className="mx-auto flex w-[1100px] max-w-[1100px] flex-col gap-6 md:px-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-[15px]"
            >
              <div className="flex min-h-[55px] min-w-[55px] items-center justify-center rounded-full bg-zinc-100 shadow-md">
                <img src="https://www.habboassets.com/assets/badges/ES64Q.gif" className="h-8 w-8" alt="Notícias já criadas" />
              </div>
              <h1 className="text-lg font-bold">Notícias já criadas</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex w-96"
            >
              <Input onChange={onSearchChange} className="w-full max-w-[314px] bg-zinc-100" placeholder="Procure pela sua notícia..." />
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-4">
            {props.articles.data.map((article, index) => (
              <a key={index} className="w-[257px]" href={`/community/news/${article.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex h-[146px] w-[257px] flex-col justify-end rounded-md text-black duration-300 hover:scale-105"
                  style={{
                    padding: "122px 8px 8px",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.1)), url(https://www.habboassets.com/assets/images/web-promos/lpromo_greengamejam2_jun25.png) center center / cover no-repeat",
                  }}
                >
                  <h1 className="text-sm font-semibold text-zinc-50">{article.title}</h1>
                  <span className="text-xs text-zinc-50">{article.short_story}</span>
                </motion.div>
              </a>
            ))}
          </div>

          <Pagination pagination={props.articles} />
        </div>
      </AppLayout>
    </>
  );
}
