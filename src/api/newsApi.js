import axios from "axios";
import { newsApiKey, nytApiKey } from "../utiles/constant";

export const article ={
    newsapi : "https://newsapi.org/v2/everything",
    nytapi: `https://api.nytimes.com/svc/search/v2/articlesearch.json/?api-key=${nytApiKey}`,
    guardianapi:"http://content.guardianapis.com/world"
}

export  const ArticleNYTApi = article.nytapi;
export const ArticleGuardianApi = article.guardianapi;

export  const ArticleNewsApi = (keyword,from,to,sortBy) => {
    return axios.get(`${article.newsapi}/?q=${keyword}&from=${from}&to=${to}&sortBy=${sortBy}&apiKey=${newsApiKey}`
    )
  };



