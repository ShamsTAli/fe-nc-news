import "./App.css";
import { Navbar } from "../components/Navbar";
import { ArticlesPage } from "../components/ArticlesPage";
import { IndvArticlePage } from "../components/IndvArticlePage";
import { Routes, Route } from "react-router-dom";
import { UserAccountProvider } from "../contexts/UserAccount";

function App() {
  return (
    <UserAccountProvider>
      <div className="body">
        <Navbar />
        <Routes>
          <Route path="/" element={<ArticlesPage />} />
          <Route path="/articles/:topic" element={<ArticlesPage/>}/>
          <Route path="/article/:article_id" element={<IndvArticlePage />} />
        </Routes>
      </div>
    </UserAccountProvider>
  );
}

export default App;


