import { cloneElement, ReactNode, useMemo, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import { Dialog } from "./Dialog";
import styled from "styled-components";

export const ActionPanel = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`;

export type UseModalProps = {
  children?: ReactNode;
  showCloseButton?: boolean;
};

export type UseModalType = (props: UseModalProps) => {
  Modal: JSX.Element;
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

export const useDialog: UseModalType = (props) => {
  const { children, showCloseButton } = props;
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  const Modal = useMemo(
    () => (
      <Dialog
        open={isOpen}
        aria-describedby="modal-slide-description"
        onClose={() => close()}
      >
        {/*
        passes closeModal() to children element so they can have a "Cancel" button to self-close
        similar to showCloseButton
      */}
        {cloneElement(children as JSX.Element, { closeModal: close })}
        {showCloseButton && (
          <ActionPanel>
            <IconButton onClick={() => close()}>
              <Close />
            </IconButton>
          </ActionPanel>
        )}
      </Dialog>
    ),
    [children]
  );

  return { Modal, open, close, isOpen };
};
