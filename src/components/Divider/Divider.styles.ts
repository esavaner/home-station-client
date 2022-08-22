import styled, { css } from "styled-components";

type Props = {
  mode?: "vertical" | "horizontal";
};

const Divider = styled.div<Props>`
  background: rgba(217, 217, 217, 0.7);
  ${({ mode }) =>
    mode === "horizontal"
      ? css`
          width: 100%;
          height: 1px;
        `
      : css`
          width: 1px;
          height: 100%;
        `}
`;

export default Divider;
