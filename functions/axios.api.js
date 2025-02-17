import axios from "axios";

const ncAPI = axios.create({
    baseURL: "https://nc-news-owjx.onrender.com/api"
})

export const getArticles = ()=>{
    return ncAPI.get("/articles")
    .then((response)=>{
        return response.data.articles
    })
}