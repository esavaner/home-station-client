import styled, { css } from "styled-components";

import { BiEdit } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";

export const SensorTile = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 7px;
  background-color: rgba(30, 67, 173, 255);
  padding: 5px 10px;
  width: 100%;
  border: none;
`;

const iconStyle = css`
  width: 30px;
  height: 30px;
`;

export const Edit = styled(BiEdit)`
  ${iconStyle}
  margin-left: auto;
  margin-right: 7px;
`;

export const Delete = styled(FiTrash2)`
  ${iconStyle}
`;
