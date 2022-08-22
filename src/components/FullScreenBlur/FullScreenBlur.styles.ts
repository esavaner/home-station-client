import styled, { css } from "styled-components";

type Props = {
  $visible?: boolean;
};

export const Background = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  transition: all 0.5s;
  padding: 15px;

  ${({ $visible }) =>
    $visible
      ? css`
          opacity: 1;
          z-index: 1000;
        `
      : css`
          opacity: 0;
          z-index: -1000;
        `}
`;
