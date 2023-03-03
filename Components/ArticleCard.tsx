import React from "react";
import LiveTimestamp from "./LiveTimestamp";
import ReadMoreBtn from "./ReadMoreBtn";

type Props = {
  article: Article;
};

function ArticleCard({ article }: Props) {
  return (
    <article
      className="flex flex-col rounded-2xl shadow-sm pb-4 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out 
    bg-cyan-800 text-cyan-50
    hover:bg-cyan-700
    dark:bg-cyan-50 dark:text-cyan-800 
    dark:hover:bg-cyan-100"
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-2xl shadow-md"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-1 flex-col gap-4 p-4">
          <h2 className="font-semibold text-center rounded-2xl p-2 bg-cyan-50 text-cyan-800 dark:bg-cyan-800 dark:text-cyan-50">
            {article.title}
          </h2>
          <section className="flex-1">
            <p className="line-clamp-6">{article.description}</p>
          </section>
          <footer className="flex flex-col text-right p-2 italic border-t border-t-cyan-50 dark:border-t-cyan-800 dark:text-cyan-800/60 text-cyan-50/60">
            <p>{article.source} -</p>
            
            <p>
              <LiveTimestamp time={article.published_at} />
            </p>
            
          </footer>
        </div>
      </div>
      <ReadMoreBtn article={article} />
    </article>
  );
}

export default ArticleCard;
