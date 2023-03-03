import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import response from "../../response.json";
import LiveTimestamp from "../../Components/LiveTimestamp";

type Props = {
  searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
  //return notFound() if no result//
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;

  return (
    <article>
      <section className="flex flex-col gap-4 lg:flex-row lg:px-10">
        {article.image && (
          <img
            className="flex h-50 w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl rounded-2xl object-cover shadow-lg shadow-cyan-700 dark:shadow-cyan-100"
            src={article.image}
            alt={article.title}
          />
        )}
        <div className="p-8 flex flex-col gap-6">
          <Link
            href={`${article.url}`}
            className="hover:scale-105 hover:font-bold"
          >
            <h1 className="flex headerTitle gap-1 no-underline">
              {article.title}
              <span>
                <LinkIcon className="rounded-2xl w-10 h-10 md:w-12 md:h-12 p-1 border border-cyan-900 dark:border-cyan-50" />
              </span>
            </h1>
          </Link>

          <div className="flex space-x-2 divide-x-2 divide-cyan-800 dark:divide-cyan-50">
            <h2 className="font-semibold pl-2">By: {article.author}</h2>
            <h2 className="font-semibold pl-2">Source: {article.source}</h2>
            <p className="pl-2">
              <LiveTimestamp time={article.published_at} />
            </p>
          </div>
          <p className="">{article.description}</p>
        </div>
      </section>
    </article>
  );
}
export default ArticlePage;
