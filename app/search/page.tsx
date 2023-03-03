import React from "react";
import NewsList from "../../Components/NewsList";
import fetchNews from "../../lib/fetchNews";
//import response from "../../response.json";

type Props = { searchParams?: { result: string } };

async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews("general", searchParams?.result, true);
  //const news: NewsResponse = response;

  return (
    <div>
      <h1 className="searchHeaderTitle">
        Search Result for:{" "}
        <span className="text-xl font-semibold italic">
          {searchParams?.result}
        </span>
      </h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
