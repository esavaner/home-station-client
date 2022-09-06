import styled, { css } from "styled-components";

import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { theme } from "@esavaner/home-station";

type Props = {
  $visible?: boolean;
};

export const NotificationContainer = styled.div<Props>`
  position: absolute;
  display: flex;
  justify-content: center;
  transition: all 0.5s;
  ${({ $visible }) =>
    $visible
      ? css`
          top: 50px;
        `
      : css`
          top: -100px;
        `}
`;

export const NotificationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  gap: 10px;
  background: ${theme.colors.neutral[0]}DD;
  border-radius: ${theme.radius[7]};
  border: 1px solid rgba(235, 170, 25, 1);
`;

const iconStyle = css`
  width: 30px;
  height: 30px;
`;

export const Yes = styled(AiOutlineCheck)`
  ${iconStyle}
  color: ${theme.colors.green};
`;

export const No = styled(AiOutlineClose)`
  ${iconStyle}
  color: ${theme.colors.red};
`;
