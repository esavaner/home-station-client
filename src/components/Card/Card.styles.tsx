import styled from "styled-components";
import { colors } from "../../styles/colors";

export type CardProps = {
  $background?: string;
  $width?: string;
  $height?: string;
};

const Card = styled.div<CardProps>`
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px;
  background: ${({ $background }) => $background || colors.card1}44;
  width: ${({ $width }) => $width || "fit-content"};
  height: ${({ $height }) => $height || "fit-content"};
`;

export default Card;