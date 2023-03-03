export default function sortNewsByImage(news: NewsResponse) {
    const newsWithImage = news.data.filter((item) => item.image !== null);
    //const newsWithoutImage = news.data.filter((item) => item.image === null)
    // const newsWithEnlang = news.data.filter((item) => item.language === "en")
    // const newsWithPllang = news.data.filter((item) => item.language === "pl")
    // const newsWithThlang = news.data.filter((item) => item.language === "th")
   
    //...newsWithEnlang, ...newsWithPllang, ...newsWithThlang,

    const sortedNewsResponse = {
        pagination: news.pagination,
        data: [...newsWithImage]

    }
    return sortedNewsResponse
} 