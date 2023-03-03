import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean

) => {
  //GraphQL query
  //GraphQL type definition
  const query = gql`
        query MyQuery(
            $access_key: String!
            $categories: String!
            $keywords: String
        )  {

    myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        languages: "en"
        sort: "published_desc"
        keywords: $keywords    
    ) {
      data {
        author
        category
        country
        description
        image
        language
        published_at
        source
        url
        title
      }
      pagination {
        count
        limit
        offset
        total
      }
    }
  }
`;

  //Fetch function with next js 13 caching...
  const res = await fetch("https://hollola.stepzen.net/api/kindly-goat/__graphql", {
    method: 'POST',
    cache: isDynamic ? "no-cache" : "default",
    next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_API_KEY,
        categories: category,
        keywords: keywords
      },
    })
  })
  // console.log("Loading new data from API for >>>",
  //   category,
  //   keywords
  // )

  const newsResponse = await res.json();

  // Sort function by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery);

  // return response
  return news;

}

export default fetchNews


// News App with Media Stack & GraphQL Stepzen
// run these command in terminal
// npm i graphql-request graphql
// npm install -g stepzen
// stepzen login
// stepzen init
// and
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=b5ed59f39a347f26207678c67c1b33f2&languages=en"


