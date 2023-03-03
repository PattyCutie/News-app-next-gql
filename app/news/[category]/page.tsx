import React from "react";
import { categories } from "../../../constants";
import NewsList from "../../../Components/NewsList";
import response from "../../../response.json";
import fetchNews from "../../../lib/fetchNews";

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {
  //const news: NewsResponse = response;
  const news: NewsResponse = await fetchNews(category);

  return (
    <div className="flex flex-col pl-4 gap-4">
      <h1 className="newsCategoryTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

//NextJs >> prebuild All news/[categories] for every category pages
