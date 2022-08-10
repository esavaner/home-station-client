import styled, { css } from "styled-components";

import { BiEdit } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";

export const SensorTile = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 32px;
  border-radius: 7px;
  background-color: rgba(30, 67, 173, 255);
  padding: 5px 10px;
  border: none;
`;

const iconStyle = css`
  width: 20px;
  height: 20px;
`;

export const Edit = styled(BiEdit)`
  ${iconStyle}
  margin-left: auto;
`;

export const Delete = styled(FiTrash2)`
  ${iconStyle}
  margin-left: 7px;
`;
