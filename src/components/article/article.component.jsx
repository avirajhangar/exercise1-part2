import React from "react";
import "./article.styles.scss";

const Article = ({ title, date, description, image }) => {
  return (
    <div className="article">
      <p className="article__date">{date}</p>
      <img
        className="article__img"
        src={`./assets/images/${image}`}
        alt="article 1"
      />
      <h3 className="article__title">{title}</h3>
      <p className="article__description">{description}</p>
    </div>
  );
};

export default Article;
