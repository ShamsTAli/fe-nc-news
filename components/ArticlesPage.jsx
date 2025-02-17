import { getArticles } from "../functions/axios.api";
import { ArticlesNavbar } from "./sub-components/ArticlesNavbar";
import { ArticleTile } from "./sub-components/ArticleTile";
import { useEffect, useState } from "react";

export const ArticlesPage = () => {

    const [articles, setArticles] = useState([])

    useEffect(()=>{
        getArticles().then((articleData)=>{
            setArticles(articleData)
        })
    })

  return (
    <div className="articles-page-container">
      <ArticlesNavbar />
      <ArticleTile articles={articles}/>
    </div>
  );
};
