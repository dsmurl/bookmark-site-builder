import styled from "styled-components";
import { default as MuiDialog } from "@mui/material/Dialog";

export const Dialog = styled(MuiDialog)`
  .MuiDialog-paper {
    border-radius: 12px;
    position: relative;
    background: ${({ theme }) => theme.custom?.background.elevation2};
    padding: 20px 25px;
  }
`;
