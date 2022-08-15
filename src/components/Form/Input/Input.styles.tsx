import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  height: 27px;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0 10px;
  margin: 10px 0;
  border: none;
  width: 100%;

  &:before,
  &:after {
    box-sizing: border-box;
  }
`;

export default Input;
