import { useState } from "react";
import "./App.css";
import { Navbar } from "../components/Navbar";
import { ArticlesPage } from "../components/ArticlesPage";

function App() {
  return (
    <div className="body">
      <Navbar />
      <ArticlesPage />
    </div>
  );
}

export default App;
