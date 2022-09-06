import styled from "styled-components";

import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { theme } from "@esavaner/home-station";

export const Success = styled(AiFillCheckCircle)`
  color: ${theme.colors.green};
`;

export const Fail = styled(AiFillCloseCircle)`
  color: ${theme.colors.red};
`;

export const Unknown = styled(AiFillQuestionCircle)`
  color: gray;
`;
