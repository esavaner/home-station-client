import * as St from "./FullScreenBlur.styles";

type Props = {
  visible?: boolean;
  children?: React.ReactNode;
};

const FullScreenBlur = ({ visible, children }: Props) => {
  return <St.Background $visible={visible}>{children}</St.Background>;
};

export default FullScreenBlur;
