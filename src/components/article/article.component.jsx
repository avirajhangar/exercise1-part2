import React from "react";

import {
  ArticleContainer,
  ArticleDate,
  ArticleImage,
  ArticleTitle,
} from "./article.styles";

const Article = ({ title, date, description, image }) => {
  return (
    <ArticleContainer>
      <ArticleDate>{date}</ArticleDate>
      <ArticleImage
        className="article__img"
        src={`./assets/images/${image}`}
        alt="article 1"
      />
      <ArticleTitle className="article__title">{title}</ArticleTitle>
      <p className="article__description">{description}</p>
    </ArticleContainer>
  );
};

export default Article;
