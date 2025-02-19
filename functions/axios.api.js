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
      console.error(error);
    });
};

export const getArticleComments = (article_id) => {
  return ncAPI
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.article;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const patchArticleVoteIncrease = (article_id) => {
  return ncAPI
    .patch(`/articles/${article_id}`, {
      inc_votes: 1,
      article_id: article_id,
    })
    .then(() => {
      console.log("Successful patch");
    })
    .catch((err) => {
      console.log("Unsuccessful patch");
    });
};

export const patchArticleVoteDecrease = (article_id) => {
  return ncAPI
    .patch(`/articles/${article_id}`, {
      inc_votes: -1,
      article_id: article_id,
    })
    .then(() => {
      console.log("Successful patch");
    })
    .catch((err) => {
      console.log("Unsuccessful patch");
    });
};

export const postArticleComment = (article_id, data) => {
  return ncAPI
    .post(`/articles/${article_id}/comments`, data)
    .then(({data}) => {
      console.log("AXIOS successful comment post");
      return data
    })
    .catch(() => {
      console.log("AXIOS comment didn't post");
    });
};

export const deleteComment = (comment_id) =>{
  return ncAPI
  .delete(`/comments/${comment_id}`)
  .then(()=>{
    console.log("AXIOS successful delete")
  })
  .catch(()=>{
    console.log("AXIOS did not delete")
  })
}