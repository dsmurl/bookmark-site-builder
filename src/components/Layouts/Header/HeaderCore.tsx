import React from "react";
import Link from "next/link";
import { Container, List, ListElement } from "./HeaderCore.styled";

// const links = [{ href: "/contact", label: "Contact" }].map((link) => {
//   link.key = `nav-link-${link.href}-${link.label}`;
//   return link;
// });

type NavLink = {
  path: string;
  title: string;
};

const navLinks: NavLink[] = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/articles",
    title: "Articles",
  },
  {
    path: "/contact",
    title: "Contact",
  },
  {
    path: "/docs",
    title: "Docs",
  },
];

export const HeaderCore = ({ sticky }: { sticky?: boolean }) => {
  return (
    <Container sticky={sticky}>
      <List>
        {navLinks.map((navLink) => (
          <ListElement key={navLink.path}>
            <Link href={navLink.path}>{navLink.title}</Link>
          </ListElement>
        ))}
        {/* {links.map(({ key, href, label }) => (
          <ListElement key={key}>
            <Link href={href} rel="noopener noreferrer">
              <a>{label}</a>
            </Link>
          </ListElement>
        ))} */}
        {/* <ListElement key="external-github-link-dsmurl">
          <OutSideAnchor
            onClick={() => openInNewTab("https:/github.com/dsmurl")}
          >
            GitHub
          </OutSideAnchor>
        </ListElement> */}
      </List>
    </Container>
  );
};
