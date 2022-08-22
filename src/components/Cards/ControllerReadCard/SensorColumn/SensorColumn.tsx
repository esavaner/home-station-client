import * as Styled from "./SensorColumn.styles";

type Props = {
  desc?: string;
  children?: React.ReactNode;
};

const SensorColumn = ({ desc, children }: Props) => {
  return (
    <Styled.Container>
      <Styled.Info>{children}</Styled.Info>
      <Styled.Desc>{desc}</Styled.Desc>
    </Styled.Container>
  );
};

export default SensorColumn;
