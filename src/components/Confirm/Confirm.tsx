import { useState } from "react";
import * as St from "./Confirm.styles";

type Props = {
  onOk?: () => void;
  icon?: React.ReactNode;
};

const Confirm = ({ onOk, icon }: Props) => {
  const [hidden, setHidden] = useState(true);

  const ok = () => {
    setHidden(false);
    onOk && onOk();
  };
  return (
    <St.Container $hidden={hidden}>
      <St.IconWrap onClick={() => setHidden(!hidden)}>{icon}</St.IconWrap>
      <St.Yes onClick={ok} />
      <St.No onClick={() => setHidden(true)} />
    </St.Container>
  );
};

export default Confirm;
