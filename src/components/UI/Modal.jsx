import { createPortal } from "react-dom";
import styled from "styled-components";

export const Modal = (props) => {
  const { children, onClose, open } = props;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    open &&
    createPortal(
      <>
        <Backdrop onClick={handleBackdropClick} />
        <ModalX>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {children}
          </ModalContent>
        </ModalX>
      </>,
      document.getElementById("modal")
    )
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.55);
  cursor: pointer;
`;

const ModalX = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 49px 0px rgba(0, 0, 0, 0.75);
`;
