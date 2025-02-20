import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getTopics } from "../../functions/axios.api";

export const ArticlesNavbar = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
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
    if (selectedTopic) {
      navigate(`/articles/${selectedTopic}`);
    }
  }

  return (
    <nav className="nav-articles">
      <select className="nav-articles-select" onChange={handleTopicChange}>
        <option>Select a topic</option>
        {topics.map((topic) => (
          <option key={topic.slug} value={topic.slug}>
            {topic.slug}
          </option>
        ))}
      </select>
      <select className="nav-articles-select">
        <option>Sort</option>
      </select>
    </nav>
  );
};
