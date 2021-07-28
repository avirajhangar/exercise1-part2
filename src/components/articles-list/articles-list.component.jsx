import React, { useState, useEffect } from "react";

import data from "../../assets/data/articles.json";
import Article from "../article/article.component";
import { ArticlesContainer } from "./articles-list.styles";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    if (data.articles) {
      setArticles(data.articles);
    }
  }, []);

  if (articles.length > 0) {
    return (
      <ArticlesContainer>
        {articles.map((article) => {
          return <Article key={article.id} {...article} />;
        })}
      </ArticlesContainer>
    );
  }
  return <div>Articles loading...</div>;
};

export default ArticlesList;
