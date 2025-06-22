import { TitleBox } from "@/components/title-box";
import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import { Article } from "@/types/article";
import { formatDate, groupArticlesByDate } from "@/utils";
import { Head, Link } from "@inertiajs/react";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";
import { SearchSlashIcon, ThumbsDown, ThumbsUp } from "lucide-react";

interface ArticlePageDetailsProps {
  article: Article;
  allArticles: Article[];
}

export default function NewsDetails({ article, allArticles }: ArticlePageDetailsProps) {
  const groupedArticles = groupArticlesByDate(allArticles);
  const articleFormattedDate = formatDate(article.created_at);

  return (
    <>
      <AppLayout>
        <Head title={article.short_story} />

        <div className="mx-auto w-[910px] max-w-[910px] pt-6 md:px-6">
          <div className="mb-2">
            <TitleBox
              image={"https://www.habboassets.com/assets/badges/TC922.gif"}
              description={`Esta notícia foi postada em ${articleFormattedDate}`}
              imageIsBadge={true}
              title={`${article.title} por ${article.author.username}`}
            />
          </div>

          <div className="sm:cgapx-6 flex flex-col-reverse max-sm:gap-6 sm:flex-row">
            <div className="sm:basis-[220px]">
              <div className="cgapy-3 mt-3 flex flex-col md:!mt-0">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="box-border w-full rounded"
                >
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(to right, #2563eb, #60a5fa, #3b82f6)",
                        "linear-gradient(to right, #1e3a8a, #3b82f6, #60a5fa)",
                        "linear-gradient(to right, #3b82f6, #2563eb, #1e3a8a)",
                        "linear-gradient(to right, #2563eb, #60a5fa, #3b82f6)",
                      ],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-t px-3.5 py-2 text-sm text-white"
                  >
                    Hoje
                  </motion.div>
                  {groupedArticles.today.length > 0 &&
                    groupedArticles.today.map((a) => (
                      <Link href={`/community/news/${a.id}`}>
                        <div
                          key={a.id}
                          className="flex cursor-pointer items-center justify-between border-b bg-white px-3.5 py-2 font-semibold hover:font-semibold"
                        >
                          <div className="text-xs text-neutral-600 duration-500 ease-out">{a.title}</div>
                        </div>
                      </Link>
                    ))}
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(to right, #2563eb, #60a5fa, #3b82f6)",
                        "linear-gradient(to right, #1e3a8a, #3b82f6, #60a5fa)",
                        "linear-gradient(to right, #3b82f6, #2563eb, #1e3a8a)",
                        "linear-gradient(to right, #2563eb, #60a5fa, #3b82f6)",
                      ],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="px-3.5 py-2 text-sm text-white"
                  >
                    Ontem
                  </motion.div>
                  {groupedArticles.yesterday.length > 0 &&
                    groupedArticles.yesterday.map((a) => (
                      <Link href={`/community/news/${a.id}`}>
                        <div
                          key={a.id}
                          className="flex cursor-pointer items-center justify-between border-b bg-white px-3.5 py-2 font-semibold hover:font-semibold"
                        >
                          <div className="text-xs text-neutral-600 duration-500 ease-out">{a.title}</div>
                        </div>
                      </Link>
                    ))}

                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(to right, #2563eb, #60a5fa, #3b82f6)",
                        "linear-gradient(to right, #1e3a8a, #3b82f6, #60a5fa)",
                        "linear-gradient(to right, #3b82f6, #2563eb, #1e3a8a)",
                        "linear-gradient(to right, #2563eb, #60a5fa, #3b82f6)",
                      ],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="px-3.5 py-2 text-sm text-white"
                  >
                    Na semana
                  </motion.div>
                  {groupedArticles.thisWeek.length > 0 &&
                    groupedArticles.thisWeek.map((a) => (
                      <Link href={`/community/news/${a.id}`}>
                        <div
                          key={a.id}
                          className="flex cursor-pointer items-center justify-between border-b bg-white px-3.5 py-2 font-semibold hover:font-semibold"
                        >
                          <div className="text-xs text-neutral-600 duration-500 ease-out">{a.title}</div>
                        </div>
                      </Link>
                    ))}
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(to right, #2563eb, #60a5fa, #3b82f6)",
                        "linear-gradient(to right, #1e3a8a, #3b82f6, #60a5fa)",
                        "linear-gradient(to right, #3b82f6, #2563eb, #1e3a8a)",
                        "linear-gradient(to right, #2563eb, #60a5fa, #3b82f6)",
                      ],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="px-3.5 py-2 text-sm text-white"
                  >
                    Semana passada
                  </motion.div>
                  {groupedArticles.lastWeek.length > 0 &&
                    groupedArticles.lastWeek.map((a) => (
                      <Link href={`/community/news/${a.id}`}>
                        <div
                          key={a.id}
                          className="flex cursor-pointer items-center justify-between border-b bg-white px-3.5 py-2 font-semibold hover:font-semibold"
                        >
                          <div className="text-xs text-neutral-600 duration-500 ease-out">{a.title}</div>
                        </div>
                      </Link>
                    ))}
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(to right, #2563eb, #60a5fa, #3b82f6)",
                        "linear-gradient(to right, #1e3a8a, #3b82f6, #60a5fa)",
                        "linear-gradient(to right, #3b82f6, #2563eb, #1e3a8a)",
                        "linear-gradient(to right, #2563eb, #60a5fa, #3b82f6)",
                      ],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-x-1 rounded-b px-3.5 py-2 text-sm text-white"
                  >
                    <Link href="/community/news" className="flex items-center gap-x-2">
                      Pesquisar mais notícias <SearchSlashIcon size={18} />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="mx-4">
              <div className="w-full">
                <div className="mb-2.5 rounded-b-md shadow-md">
                  <div
                    className="rounded-t bg-cover bg-center px-3.5 py-2.5 text-[1.1rem] font-medium tracking-[.7px] text-white shadow-sm [text-shadow:_1px_1px_2px_rgb(0_0_0_/_25%)]"
                    style={{ backgroundImage: `url(${article.image})` }}
                  >
                    {article.title}
                  </div>
                  <article className="prose lg:prose-xl relative h-full w-[541px] overflow-y-auto border-none bg-white bg-cover px-3.5 py-2.5 pb-[50px] text-sm text-black">
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.long_story) }}></div>
                  </article>
                </div>

                <div className="rounded-md bg-white p-2 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs">
                      <div
                        className="flex h-[57px] w-[57px] items-center overflow-hidden rounded-full bg-cover bg-no-repeat"
                        style={{
                          background: `linear-gradient(to top, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.1))`,
                        }}
                      >
                        <img
                          className="h-[55px] w-[64px] object-none object-[center_-30px]"
                          src={`https://www.habblet.city/habblet-imaging/avatarimage?figure=${article.author.figure}&direction=2&head_direction=3&gesture=sml`}
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1 font-bold text-gray-500">
                          <img src="/assets/images/lapis.png" className="w-4" />
                          {article.author.username}
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <img src="/assets/images/time.png" className="w-4" />
                          {articleFormattedDate}
                        </div>
                        <div className="mt-1 flex items-center gap-1">
                          <span className="rounded bg-blue-100 p-1 text-[10px] text-blue-800">{"Hapixel Hotel".toUpperCase()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400">
                        <ThumbsUp size={24} />
                      </Button>
                      <Button className="flex h-10 w-10 items-center justify-center rounded-full bg-red-400 hover:bg-red-300">
                        <ThumbsDown size={24} />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <div className="flex h-[57px] w-[57px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600">
                      <img
                        className="h-[55px] w-[64px] object-none object-[center_-30px]"
                        src="https://www.habblet.city/habblet-imaging/avatarimage?figure=hd-180-1.ch-3030-64.lg-275-62.sh-295-62&direction=2&head_direction=3&gesture=sml"
                      />
                    </div>

                    <div className="flex h-[57px] w-[57px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600">
                      <img
                        className="h-[55px] w-[64px] object-none object-[center_-30px]"
                        src="https://www.habblet.city/habblet-imaging/avatarimage?figure=hd-180-1.ch-3030-64.lg-275-62.sh-295-62&direction=2&head_direction=3&gesture=sml"
                      />
                    </div>

                    <div className="flex h-[57px] w-[57px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600">
                      <img
                        className="h-[55px] w-[64px] object-none object-[center_-30px]"
                        src="https://www.habblet.city/habblet-imaging/avatarimage?figure=hd-180-1.ch-3030-64.lg-275-62.sh-295-62&direction=2&head_direction=3&gesture=sml"
                      />
                    </div>

                    <div className="flex h-[57px] w-[57px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
                      <img
                        className="h-[55px] w-[64px] object-none object-[center_-30px]"
                        src="https://www.habblet.city/habblet-imaging/avatarimage?figure=hd-180-1.ch-3030-64.lg-275-62.sh-295-62&direction=2&head_direction=3&gesture=sml"
                      />
                    </div>

                    <div className="flex h-[57px] w-[57px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-red-400 via-red-500 to-red-600">
                      <img
                        className="h-[55px] w-[64px] object-none object-[center_-30px]"
                        src="https://www.habblet.city/habblet-imaging/avatarimage?figure=hd-180-1.ch-3030-64.lg-275-62.sh-295-62&direction=2&head_direction=3&gesture=sml"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
