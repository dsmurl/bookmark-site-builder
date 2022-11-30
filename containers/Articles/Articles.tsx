import React from "react";
import { useState, useEffect } from "react";
import { Content } from "./Articles.styled";
import { BaseLayout } from "../../components/Layouts/BaseLayout/BaseLayout";
import { Loading } from "../../components/Loading/Loading";
import { Prisma, prisma } from "../../util/prisma-connection";
import { AddArticlePanel } from "../../components/AddArticlePanel/AddArticlePanel";

export const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Prisma.Article[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getArticles")
      .then((res) => res.json())
      .then((articles) => {
        setArticles(articles);
        setLoading(false);
      });
  }, []);

  return (
    <Content>
      <BaseLayout title="Articles">
        <AddArticlePanel />
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
