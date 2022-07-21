import styled from "styled-components";
import { background } from "assets/images";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  gap: 10px;
  padding: 15px;
  background: url(${background});
  background-size: 100% 100%;
`;
