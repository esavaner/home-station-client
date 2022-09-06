import { theme } from "@esavaner/home-station";
import styled, { css } from "styled-components";

type Props = {
  $fill?: boolean;
};

const Button = styled.button<Props>`
  border: 2px solid ${theme.colors.pink};
  height: 27px;
  padding: 0px 10px;
  border-radius: 7px;
  font-weight: bold;
  width: fit-content;
  ${({ $fill }) =>
    $fill
      ? css`
          color: ${theme.colors.neutral[2]};
          background: ${theme.colors.pink};
        `
      : css`
          color: ${theme.colors.pink};
          background: transparent;
        `}

  &:disabled {
    border: 2px solid ${theme.colors.neutral[4]};
    cursor: not-allowed;
    ${({ $fill }) =>
      $fill
        ? css`
            color: initial;
            background: ${theme.colors.neutral[4]};
          `
        : css`
            color: ${theme.colors.neutral[4]};
            background: transparent;
          `}
  }
`;

export default Button;
