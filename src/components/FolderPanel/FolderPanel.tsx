import React from "react";
import { Content } from "./FolderPanel.styled";
import { Folder } from "../../types/Folder";

type FolderPanelProps = {
  folder: Folder;
};

export const FolderPanel: React.FC<FolderPanelProps> = ({
  folder,
}: {
  folder: Folder;
}) => {
  return (
    <Content>
      <h4>{folder.title}</h4>
      {folder.id}: {folder.title}
    </Content>
  );
};
