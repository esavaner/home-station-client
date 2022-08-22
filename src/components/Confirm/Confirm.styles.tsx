import styled, { css } from "styled-components";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

type Props = {
  $hidden?: boolean;
};

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: ${({ $hidden }) => ($hidden ? "30px" : "90px")};
  transition: all 0.3s;
`;

const iconStyle = css`
  width: 30px;
  height: 30px;
`;

export const IconWrap = styled.div`
  ${iconStyle}
`;

export const Yes = styled(AiOutlineCheck)`
  ${iconStyle}
`;

export const No = styled(AiOutlineClose)`
  ${iconStyle}
`;
