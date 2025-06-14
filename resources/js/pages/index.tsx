import NewsCard from "@/components/community/news-card";
import { TitleBox } from "@/components/title-box";
import AppLayout from "@/layouts/app-layout";
import { Article } from "@/types/article";
import { Head } from "@inertiajs/react";
import { a } from "node_modules/framer-motion/dist/types.d-DDSxwf0n";

interface IndexPageProps {
  news: Article[];
}

export default function Index({news}: IndexPageProps) {
  return (
    <>
      <AppLayout>
        <Head title="Início"></Head>

        <>
        
       
          <div className="w-full">
            <div className="mb-2">
 <TitleBox
                    title="Últimas notícias"
                    description="Se mantenha atualizado nas últimas novidades do servidor."
                    imageIsBadge={true}
                    image={"/assets/images/box/articles.gif"}
                  />
            </div>
             
            <div>
              <div className="flex w-full items-center">
                <div className="flex w-full gap-2">
                

                  <div className="flex gap-4">
                    {news.map((article,i ) => (
                      <a href={`/community/news/${article.id}`}>
                         <NewsCard
                      author={article.author.username}
                      id={article.id}
                      description={
                        article.short_story
                      }
                    />
                      </a>

                    ))}
                   
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </AppLayout>
    </>
  );
}
