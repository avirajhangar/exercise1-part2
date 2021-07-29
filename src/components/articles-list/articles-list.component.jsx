import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Article from "../article/article.component";

import data from "../../assets/data/articles.json";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    if (data.articles) {
      setArticles(data.articles);
    }
  }, []);

  return (
    articles && (
      <ArticlesContainer>
        {articles.map((article) => {
          return <Article key={article.id} {...article} />;
        })}
      </ArticlesContainer>
    )
  );
};

const ArticlesContainer = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  @media (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 30px;
  }
`;

export default ArticlesList;
