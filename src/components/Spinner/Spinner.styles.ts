import styled from "styled-components";
import { FiSun } from "react-icons/fi";
import { theme } from "@esavaner/home-station";

const Spinner = styled(FiSun)`
  color: ${theme.colors.pink};
  animation: 1.2s infinite spin;
  font-size: 20px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
