import "./App.css";
import { Navbar } from "../components/Navbar";
import { ArticlesPage } from "../components/ArticlesPage";
import { IndvArticlePage } from "../components/IndvArticlePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/article/:article_id" element={<IndvArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
