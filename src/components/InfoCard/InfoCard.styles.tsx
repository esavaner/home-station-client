import Card from "components/Card";
import styled from "styled-components";
import { colors } from "styles/colors";

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
`;

export const Divider = styled.div`
  min-height: 35px;
  height: 70%;
  width: 1px;
  background: ${colors.font};
`;

export const Main = styled.span`
  font-size: 16px;
`;

export const Description = styled.span`
  font-size: 10px;
`;
