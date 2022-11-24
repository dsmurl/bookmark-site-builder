import React from "react";
import { Content } from "./Docs.styled";
import { BaseLayout } from "../../components/Layouts/BaseLayout/BaseLayout";

export const Docs: React.FC = () => {
  return (
    <Content>
      <BaseLayout title="Articles">
        <p>Simple Docs page</p>
      </BaseLayout>
    </Content>
  );
};
