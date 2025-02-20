import axios from "axios";

const ncAPI = axios.create({
  baseURL: "https://nc-news-owjx.onrender.com/api",
});

export const getArticles = (topic) => {
  return ncAPI
    .get("/articles", {
      params: topic ? { topic } : {},
    })
    .then((response) => {
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
      return
    })
    .catch((err) => {
      console.error(err)
    });
};

export const patchArticleVoteDecrease = (article_id) => {
  return ncAPI
    .patch(`/articles/${article_id}`, {
      inc_votes: -1,
      article_id: article_id,
    })
    .then(() => {
      return
    })
    .catch((err) => {
      console.error(err)
    });
};

export const postArticleComment = (article_id, data) => {
  return ncAPI
    .post(`/articles/${article_id}/comments`, data)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.error(err)
    });
};

export const deleteComment = (comment_id) => {
  return ncAPI
    .delete(`/comments/${comment_id}`)
    .then(() => {
      return
    })
    .catch((err) => {
      console.error(err)
    });
};

export const getTopics = () => {
  return ncAPI.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
