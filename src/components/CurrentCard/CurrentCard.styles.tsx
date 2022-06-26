import Card from "components/Card";
import styled from "styled-components";

export const CurrentCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Temp = styled.span`
  font-size: 20px;
`;

export const Description = styled.span`
  font-size: 12px;
`;
