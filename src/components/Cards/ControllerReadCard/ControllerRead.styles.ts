import styled from "styled-components";
import Card from "../Card";

export const ControllerCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CardCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const TempRead = styled.span`
  font-size: 24px;
`;
