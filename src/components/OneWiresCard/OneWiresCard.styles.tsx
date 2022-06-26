import Card from "components/Card";
import styled from "styled-components";

export const WireCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  flex: 1;
  gap: 20px;
`;

export const Temp = styled.span`
  font-size: 48px;
`;

export const Description = styled.span`
  font-size: 14px;
`;
