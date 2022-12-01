import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: white;
  font-size: 26px;

  ${({ sticky }: { sticky?: boolean }) =>
    sticky &&
    css`
      position: fixed;
      top: 0;
      z-index: 10;
    `};
`;

export const OutSideAnchor = styled.a`
  cursor: pointer;
  color: #067df7;
  text-decoration: none;
  font-size: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: #333;
`;

export const ListElement = styled.li`
  float: left;
  height: 64px;

  ${({ last }: { last?: boolean }) =>
    last &&
    css`
      float: right;
      padding-right: 15px;
    `}

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
    height: 64px;
  }

  a:hover {
    background-color: #111;
  }
`;
