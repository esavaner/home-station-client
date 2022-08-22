import styled from "styled-components";

type Props = {
  size?: string;
};

const Icon = styled.img<Props>`
  width: ${({ size }) => (size ? size : "30px")};
  height: ${({ size }) => (size ? size : "30px")};
`;

export default Icon;
