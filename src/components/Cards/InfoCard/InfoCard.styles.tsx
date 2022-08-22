import { colors } from "@esavaner/home-station";
import Card from "components/Cards/Card";
import styled from "styled-components";

export const InfoCardSt = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

export const InfoPane = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2px;

  svg {
    font-size: 20px;
    padding: 2px;
    border-radius: 5px;
    background: ${colors.font};
  }
`;

export const Main = styled.span``;

export const Description = styled.span`
  font-size: 10px;
`;
