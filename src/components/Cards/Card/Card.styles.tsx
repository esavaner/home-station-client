import { theme } from "@esavaner/home-station";
import styled from "styled-components";

export type CardProps = {
  $background?: string;
  $width?: string;
  $height?: string;
};

const Card = styled.div<CardProps>`
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  background: rgba(217, 217, 217, 0.2);
  border: 1px solid ${theme.colors.pink};
`;

export default Card;
