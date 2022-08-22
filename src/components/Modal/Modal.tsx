import FullScreenBlur from "components/FullScreenBlur";
import * as St from "./Modal.styles";

type Props = {
  onOk?: () => void;
  onCancel?: () => void;
  children?: React.ReactNode;
  visible?: boolean;
};
const Modal = ({ onOk, onCancel, children, visible }: Props) => {
  return (
    <FullScreenBlur visible={visible}>
      <St.Container>{children}</St.Container>
    </FullScreenBlur>
  );
};

export default Modal;
