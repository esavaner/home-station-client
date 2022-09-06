import { theme } from "@esavaner/home-station";
import styled from "styled-components";
import Card from "../Card";

export const ControllerCard = styled(Card)`
  display: flex;
  gap: 15px;
  width: 100%;
  overflow-x: auto;
`;

export const CardCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const State = styled.span`
  font-size: ${theme.fonts[20]};
  white-space: nowrap;
`;
