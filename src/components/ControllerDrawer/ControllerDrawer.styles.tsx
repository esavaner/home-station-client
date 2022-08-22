import styled from "styled-components";

import { FiTrash2 } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ControllerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  font-size: 20px;
`;

export const IpCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Trash = styled(FiTrash2)`
  width: 30px;
  height: 30px;
  color: rgba(242, 104, 94, 0.89);
`;
