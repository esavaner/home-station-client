import { theme } from "@esavaner/home-station";
import styled, { css } from "styled-components";

type Props = {
  mode?: "vertical" | "horizontal";
};

const Divider = styled.div<Props>`
  flex-shrink: 0;
  background: ${theme.colors.neutral[2]};
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
