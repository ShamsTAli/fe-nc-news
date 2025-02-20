import { getArticles } from "../functions/axios.api";
import { ArticlesNavbar } from "./sub-components/ArticlesNavbar";
import { ArticleTile } from "./sub-components/ArticleTile";
import { useEffect, useState } from "react";
import { Preloader } from "./sub-components/Preloader";
import { useParams } from "react-router";

export const ArticlesPage = () => {

  const [articles, setArticles] = useState(null);
  const {topic} = useParams()

  useEffect(() => {
    getArticles(topic).then((articleData) => {
      setArticles(articleData);
    });
  }, [topic]);

  if (articles === null) {
    return <Preloader />;
  }

  return (
    <div className="articles-page-container">
      <ArticlesNavbar />
      <ArticleTile articles={articles} />
    </div>
  );
};
