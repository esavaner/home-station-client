import styled, { css } from "styled-components";

type Props = {
  $fill?: boolean;
};

const Button = styled.button<Props>`
  border: 2px solid rgba(242, 104, 94, 0.89);
  height: 27px;
  padding: 0px 10px;
  border-radius: 7px;
  font-weight: bold;
  font-size: 16px;
  width: fit-content;
  ${({ $fill }) =>
    $fill
      ? css`
          color: rgb(230, 230, 230);
          background: rgba(242, 104, 94, 0.89);
        `
      : css`
          color: rgba(242, 104, 94, 0.89);
          background: transparent;
        `}

  &:disabled {
    border: 2px solid rgb(100, 100, 100);
    cursor: not-allowed;
    ${({ $fill }) =>
      $fill
        ? css`
            color: initial;
            background: rgb(100, 100, 100);
          `
        : css`
            color: rgb(100, 100, 100);
            background: transparent;
          `}
  }
`;

export default Button;
