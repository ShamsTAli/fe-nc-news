import { getArticles } from "../functions/axios.api";
import { ArticlesNavbar } from "./sub-components/ArticlesNavbar";
import { ArticleTile } from "./sub-components/ArticleTile";
import { useEffect, useState } from "react";
import { Preloader } from "./sub-components/Preloader";
import { useParams } from "react-router";
import { useSearchParams } from "react-router";
import { NotFoundPage } from "./sub-components/NotFoundPage";

export const ArticlesPage = () => {
  const [articles, setArticles] = useState(null);
  const { topic } = useParams();
  const [searchParams] = useSearchParams(); // We are using the results of the search params here
  const [error, setError] = useState(null);

  const sortByQuery = searchParams.get("sort_by") || "created_at";
  const orderQuery = searchParams.get("order") || "DESC";

  useEffect(() => {
    const fetchAndSortArticles = async () => {
      try {
        const articleData = await getArticles(topic, sortByQuery, orderQuery);
        if (sortByQuery === "created_at") {
          setArticles(articleData);
        } else {
          const sortedArticles = [...articleData].sort((a, b) => {
            const valueA =
              sortByQuery === "comment_count"
                ? parseInt(a.comment_count)
                : parseInt(a.votes);
            const valueB =
              sortByQuery === "comment_count"
                ? parseInt(b.comment_count)
                : parseInt(b.votes);

            return orderQuery === "DESC" ? valueB - valueA : valueA - valueB;
          });
          setArticles(sortedArticles);
        }
      } catch (err) {
        setError(err);
      }
    };
    fetchAndSortArticles();
  }, [topic, sortByQuery, orderQuery]);

  if (articles === null) {
    return <Preloader />;
  }

  if (error) {
    return <p>Somethings gone wrong..</p>
  }

  return (
    <div className="articles-page-container">
      <ArticlesNavbar />
      <ArticleTile articles={articles} />
    </div>
  );
};
