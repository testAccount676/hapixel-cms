import DiscordWidget from "@/components/discord-widget";
import { TitleBox } from "@/components/title-box";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import UserBanner from "@/components/users/user-banner";
import AppLayout from "@/layouts/app-layout";
import { SharedData } from "@/types";
import { Article } from "@/types/article";
import { formatDate } from "@/utils";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";

interface MePageProps {
  articles: Article[];
}

export default function CurrentUser({ articles }: MePageProps) {
  const { auth, setting } = usePage<SharedData>().props;

  return (
    <>
      <AppLayout>
        <Head title={auth.user.username}></Head>
        <div className="flex-col justify-center gap-10 sm:flex-row md:flex">
          <div className="flex flex-col gap-y-4">
            <UserBanner user={auth.user} />

            {/* POSTS */}
          </div>

          <div className="flex flex-col gap-y-4">
            {/* NEWS */}
            <div>
              <div className="mb-2 w-full">
                <TitleBox
                  small
                  title="Últimas Notícias"
                  description={"Dê uma olhada nas mais recentes"}
                  image={"https://www.habboassets.com/assets/badges/PTD46.gif"}
                  imageIsBadge={true}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="overflow-hidden rounded-md shadow-md"
              >
                <Carousel
                  opts={{
                    loop: true,
                  }}
                  orientation="horizontal"
                  className="w-full sm:w-full md:max-w-sm"
                >
                  <CarouselContent>
                    {articles.map((article, index) => (
                      
                      <CarouselItem className="cursor-pointer" key={index}>
                        <Link href={`/community/news/${article.id}`}>
                        <div className="relative overflow-hidden">
                          <img
                            className="h-36 w-full sm:w-full sm:object-cover"
                            src={article.image}
                            alt={article.title}
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-black/20 p-4 text-white">
                            <h3 className="text-lg font-semibold">{article.title}</h3>
                            <p className="text-sm">{article.short_story}</p>
                            <div className="mt-2">
                              <p className="text-xs">por {article.author.username}</p>
                            </div>
                          </div>
                        </div>
                        </Link>
                      </CarouselItem>
                      
                    ))}
                  </CarouselContent>
                </Carousel>

                {articles.map((article, index) => (
                  <div className="group cgapx-4 flex min-h-[50px] items-center gap-x-2 border-x-[1px] border-b border-[rgba(0,0,0,0.1)] bg-white px-4 py-2 text-xs hover:cursor-pointer hover:!opacity-100">
                    <img
                      src="/assets/images/plus.webp"
                      width="10"
                      height="10"
                      alt="Plus icon"
                      className="ult-not-inner h-[10px] w-[10px] opacity-50 group-hover:!opacity-100"
                    ></img>
                    <div>
                      <div className="ult-not-inner font-bold opacity-50 group-hover:!opacity-100">{article.title}</div>
                      <div className="ult-not-inner opacity-50 group-hover:!opacity-100">{formatDate(article.created_at)}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* DISCORD WIDGET */}
            <DiscordWidget />
          </div>
        </div>
      </AppLayout>
    </>
  );
}
