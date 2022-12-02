import React from "react";
import { Content, AddArticleArea, ArticleRow } from "./Articles.styled";
import { BaseLayout } from "../../components/Layouts/BaseLayout/BaseLayout";
import { Loading } from "../../components/Loading/Loading";
import { AddArticlePanel } from "../../components/AddArticlePanel/AddArticlePanel";
import { useArticles } from "../../hooks/useArticles";
import { Button, useDialog } from "../../components/ui-kit";
import { ArticlePanel } from "../../components/ArticlePanel/ArticlePanel";

export const Articles: React.FC = () => {
  const { articles, isLoading } = useArticles();
  const { Modal, open } = useDialog({
    children: <AddArticlePanel />,
    showCloseButton: true,
  });

  return (
    <Content>
      <BaseLayout title="Articles">
        {Modal}
        <AddArticleArea>
          <Button variant="contained" onClick={() => open()}>
            Add
          </Button>
        </AddArticleArea>
        {isLoading && articles.length === 0 && <Loading />}
        {articles ? (
          articles.map((article) => (
            <ArticleRow key={article.id}>
              <ArticlePanel article={article} />
            </ArticleRow>
          ))
        ) : (
          <p>No article data</p>
        )}
      </BaseLayout>
    </Content>
  );
};
