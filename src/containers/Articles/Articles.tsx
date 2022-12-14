import React from "react";
import { Content, AddArticleArea, ArticleRow } from "./Articles.styled";
import { BaseLayout } from "../../components/Layouts/BaseLayout/BaseLayout";
import { Loading } from "../../components/Loading/Loading";
import { ChangeSiteMarkPanel } from "../../components/ChangeSiteMarkPanel/ChangeSiteMarkPanel";
import { useSiteMark } from "../../hooks/useSiteMark";
import { Button, useDialog } from "../../components/ui-kit";
import { ArticlePanel } from "../../components/ArticlePanel/ArticlePanel";
import { FolderPanel } from "../../components/FolderPanel/FolderPanel";
import { Folder } from "../../types/Folder";
import { BookmarkItemType } from "../../types/BookmarkItemType";

export const Articles: React.FC = () => {
  const { siteData, targetSiteMark, isLoading } =
    useSiteMark();
  const { Modal, open } = useDialog({
    children: <ChangeSiteMarkPanel />,
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
            Change
          </Button>
        </AddArticleArea>
        {isLoading && <Loading />}
        {targetSiteMark !== "" ? (
          <pre>{JSON.stringify(siteData, null, 4)}</pre>
        ) : (
          <p>No article data</p>
        )}
        {/* <ArticleRow>
          <FolderPanel folder={sampleFolder} />
        </ArticleRow> */}
      </BaseLayout>
    </Content>
  );
};
