import { colors } from "@esavaner/home-station";
import styled, { css } from "styled-components";

export type DrawerStProps = {
  $placing?: "left" | "right";
  $visible?: boolean;
};

export const DrawerSt = styled.div<DrawerStProps>`
  overflow-y: auto;
  height: 100%;
  width: 80%;
  padding: 20px;
  transition: all 0.3s;
  background: ${colors.black}DD;
  box-sizing: border-box;
  border-radius: 10px;
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
          margin-right: auto;
        `
      : css`
          margin-left: auto;
        `};
`;

export const InnerDrawer = styled.div`
  padding-top: 20px;
`;

export const CancelButton = styled.button<DrawerStProps>`
  background: none;
  border: none;
  outline: none;
  color: ${colors.font};
  display: flex;
  gap: 20px;
  font-size: 20px;

  ${({ $placing }) =>
    $placing === "left" &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
`;
