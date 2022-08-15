import styled from "styled-components";

import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillQuestionCircle,
} from "react-icons/ai";

export const Success = styled(AiFillCheckCircle)`
  color: #43a047;
`;

export const Fail = styled(AiFillCloseCircle)`
  color: #d32f2f;
`;

export const Unknown = styled(AiFillQuestionCircle)`
  color: gray;
`;
