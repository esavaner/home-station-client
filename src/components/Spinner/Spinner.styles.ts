import styled from "styled-components";
import { FiSun } from "react-icons/fi";

const Spinner = styled(FiSun)`
  color: rgba(242, 104, 94, 0.89);
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
