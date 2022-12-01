import React from "react";
import { useState, useEffect } from "react";
import { Content, AddArticleArea } from "./Articles.styled";
import { BaseLayout } from "../../components/Layouts/BaseLayout/BaseLayout";
import { Loading } from "../../components/Loading/Loading";
import { Prisma, prisma } from "../../util/prisma-connection";
import { AddArticlePanel } from "../../components/AddArticlePanel/AddArticlePanel";
import { useArticles } from "../../hooks/useArticles";

export const Articles: React.FC = () => {
  const { articles, isLoading } = useArticles();

  return (
    <Content>
      <BaseLayout title="Articles">
        <AddArticleArea>
          <AddArticlePanel />
        </AddArticleArea>
        {isLoading && <Loading />}
        {articles ? (
          articles.map((article) => (
            <div key={article.id}>
              <h1>{article.title}</h1>
              <p>{article.id}</p>
              <p>{article.url}</p>
            </div>
          ))
        ) : (
          <p>No article data</p>
        )}
      </BaseLayout>
    </Content>
  );
};
