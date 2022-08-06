import { colors } from "@esavaner/home-station";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: ${colors.font};
  overflow: hidden;
  box-sizing: border-box;
  background: linear-gradient(45deg, rgba(47, 35, 133, 1) 0%, #2c7eb9 100%);
  font-size: 16px;
`;

export default AppContainer;
