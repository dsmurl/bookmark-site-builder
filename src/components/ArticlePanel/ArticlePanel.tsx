import React from "react";
import { Content } from "./ArticlePanel.styled";
import { Article } from "../../types/Article";

type ArticlePanelProps = {
  article: Article;
};

export const ArticlePanel: React.FC<ArticlePanelProps> = ({ article }) => {
  return (
    <Content>
      <h1>{article.title}</h1>
      <p>
        {article.id}: {article.url}
      </p>
    </Content>
  );
};
