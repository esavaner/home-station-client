import * as St from "./Drawer.styles";

import { ImCancelCircle } from "react-icons/im";

export type DrawerProps = {
  $placing?: "left" | "right";
  $visible: boolean;
  children?: React.ReactNode;
  onClose: () => void;
};

const Drawer = ({ onClose, children, ...rest }: DrawerProps) => {
  return (
    <St.DrawerSt {...rest}>
      <St.CancelButton onClick={onClose}>
        <span>Anuluj</span>
        <ImCancelCircle />
      </St.CancelButton>
      <St.InnerDrawer>{children}</St.InnerDrawer>
    </St.DrawerSt>
  );
};

export default Drawer;
