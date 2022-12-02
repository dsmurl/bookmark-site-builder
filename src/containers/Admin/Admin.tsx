import React from "react";
import { Content } from "./Admin.styled";
import { BaseLayout } from "../../components/Layouts/BaseLayout/BaseLayout";

export const Admin: React.FC = () => {
  return (
    <Content>
      <BaseLayout title="Admin">
        <h3>Admin</h3>
      </BaseLayout>
    </Content>
  );
};
