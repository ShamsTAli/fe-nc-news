import axios from "axios";

const ncAPI = axios.create({
  baseURL: "https://nc-news-owjx.onrender.com/api",
});

export const getArticles = () => {
  return ncAPI.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export const getArticleById = (article_id) => {
  return ncAPI
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((error) => {
      console.log("in catch block");
      console.error(error);
    });
};
