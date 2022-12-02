import React from "react";
import { Content } from "./ArticlePanel.styled";
import { Article } from "../../types/Article";

type ArticlePanelProps = {
  article: Article;
};

export const ArticlePanel: React.FC<ArticlePanelProps> = ({ article }) => {
  return (
    <Content>
      <h4>{article.title}</h4>
      {article.id}: {article.url}
    </Content>
  );
};
