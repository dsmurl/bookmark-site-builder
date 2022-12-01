import React from "react";
import { HeaderCore } from "./HeaderCore";

// This header double renders itself so that one is fixed
// and then the content of the following block will not
// be covered up by the header.

export const Header = () => {
  return (
    <>
      <HeaderCore sticky={true} />
      <HeaderCore />
    </>
  );
};
