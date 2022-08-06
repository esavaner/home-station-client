import Card from "components/Cards/Card";
import styled from "styled-components";

export const ForecastCardSt = styled(Card)`
  display: flex;
  gap: 20px;
  width: 100%;
  overflow-x: scroll;
`;

export const HourPane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 30px;
`;

export const Hour = styled.span`
  font-size: 12px;
`;

export const Humidity = styled.span`
  font-size: 12px;
`;
