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
  padding: 5px 20px;
  background: rgba(217, 217, 217, 0.2);
  border: 1px solid rgba(242, 104, 94, 0.89);
`;

export default Card;
