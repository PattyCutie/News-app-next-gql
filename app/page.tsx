import { categories } from "../constants";
import NewsList from "../Components/NewsList";
import fetchNews from "../lib/fetchNews";
//import response from "../response.json";

async function Homepage() {
  //fetch the news data with demo data
  //const news: NewsResponse = response || await fetchNews(categories.join(','))
  //set timeout for 3 seconds
  //await new Promise((resolve) => setTimeout(resolve, 300))
  
  const news: NewsResponse = await fetchNews(categories.join(","));
  //console.log(news)

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
