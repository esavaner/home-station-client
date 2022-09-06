import { theme } from "@esavaner/home-station";
import styled from "styled-components";

const Select = styled.select`
  box-sizing: border-box;
  height: 22px;
  border-radius: 7px;
  background-color: ${theme.colors.neutral[2]};
  padding: 0 10px;
  margin: 10px 0;
  border: none;

  &:before,
  &:after {
    box-sizing: border-box;
  }
`;

export default Select;
