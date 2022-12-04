import React from "react";
import { Content, AddArticleArea, ArticleRow } from "./Articles.styled";
import { BaseLayout } from "../../components/Layouts/BaseLayout/BaseLayout";
import { Loading } from "../../components/Loading/Loading";
import { AddArticlePanel } from "../../components/AddArticlePanel/AddArticlePanel";
import { useArticles } from "../../hooks/useArticles";
import { Button, useDialog } from "../../components/ui-kit";
import { ArticlePanel } from "../../components/ArticlePanel/ArticlePanel";
import { FolderPanel } from "../../components/FolderPanel/FolderPanel";
import { Folder } from "../../types/Folder";

export const Articles: React.FC = () => {
  const { articles, isLoading } = useArticles();
  const { Modal, open } = useDialog({
    children: <AddArticlePanel />,
    showCloseButton: true,
  });

  const currentDate = new Date();

  const sampleFolder: Folder = {
    id: 3,
    title: "Gardening Stuff",
    description: "This is all I know about gardening",
    createDate: currentDate,
    lastUpdate: currentDate,
  };

  return (
    <Content>
      <BaseLayout title="Articles">
        <h3>Articles</h3>
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
        <ArticleRow>
          <FolderPanel folder={sampleFolder} />
        </ArticleRow>
      </BaseLayout>
    </Content>
  );
};
