import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { useRouter } from "next/router";

import { Content, BodySection } from "./BaseLayout.styled";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const BaseLayout = ({ children, title, ...props }: LayoutProps) => (
  <Content {...props}>
    <Header />
    <BodySection>{children}</BodySection>
    <Footer />
  </Content>
);
