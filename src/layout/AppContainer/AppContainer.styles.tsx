import styled from "styled-components";
import { colors } from "styles/colors";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: ${colors.font};
  overflow: hidden;
  box-sizing: border-box;
  background: linear-gradient(
    45deg,
    rgba(47, 35, 133, 1) 0%,
    rgba(60, 188, 224, 1) 100%
  );
`;

export default AppContainer;
