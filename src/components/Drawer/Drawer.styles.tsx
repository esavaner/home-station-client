import styled, { css } from "styled-components";
import { colors } from "styles/colors";

export type DrawerStProps = {
  $placing?: "left" | "right";
  $visible: boolean;
};

export const DrawerSt = styled.div<DrawerStProps>`
  position: absolute;
  height: 100%;
  width: 80%;
  padding: 20px;
  top: 0;
  transition: all 0.3s;
  background: ${colors.black}DD;
  backdrop-filter: blur(8px);
  ${({ $visible, $placing }) =>
    $visible
      ? css`
          transform: translateX(0%);
        `
      : $placing === "left"
      ? css`
          transform: translateX(-100%);
        `
      : css`
          transform: translateX(100%);
        `}
  ${({ $placing }) =>
    $placing === "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};
`;

export const InnerDrawer = styled.div`
  padding-top: 20px;
`;

export const CancelButton = styled.button`
  background: none;
  border: none;
  outline: none;
  color: ${colors.font};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  width: 100%;
`;
