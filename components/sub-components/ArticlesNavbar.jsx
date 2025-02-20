import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { getTopics } from "../../functions/axios.api";

export const ArticlesNavbar = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getTopics()
      .then((topicData) => {
        setTopics(topicData);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  function handleTopicChange(event) {
    const selectedTopic = event.target.value;

    if (selectedTopic === "all") {
      navigate("/");
    } else {
      navigate(`/articles/${selectedTopic}`);
    }
  }

  function handleSortyByChange(event) {
    const sortBy = event.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("sort_by", sortBy);
    setSearchParams(params);
  }

  function handleOrderChange(event) {
    const order = event.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("order", order);
    setSearchParams(params);
  }

  return (
    <nav className="nav-articles">
      <select className="nav-articles-select" onChange={handleTopicChange}>
        <option>Select a topic</option>
        <option value="all">All topics</option>
        {topics.map((topic) => (
          <option key={topic.slug} value={topic.slug}>
            {topic.slug}
          </option>
        ))}
      </select>
      <select className="nav-articles-select" onChange={handleSortyByChange}>
        <option>Sort by</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <select className="nav-articles-select" onChange={handleOrderChange}>
        <option>Order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </nav>
  );
};
