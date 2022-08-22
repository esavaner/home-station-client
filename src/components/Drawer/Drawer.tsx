import * as St from "./Drawer.styles";

import { ImCancelCircle } from "react-icons/im";
import FullScreenBlur from "components/FullScreenBlur";

export type DrawerProps = {
  $placing?: "left" | "right";
  $visible: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  header?: React.ReactNode;
};

const Drawer = ({
  onClose,
  children,
  header,
  $placing,
  $visible,
}: DrawerProps) => {
  return (
    <FullScreenBlur visible={$visible}>
      <St.DrawerSt $placing={$placing} $visible={$visible}>
        <St.Header>
          <St.CancelButton onClick={onClose}>
            <span>Anuluj</span>
            <ImCancelCircle />
          </St.CancelButton>
          {header}
        </St.Header>
        <St.InnerDrawer>{children}</St.InnerDrawer>
      </St.DrawerSt>
    </FullScreenBlur>
  );
};

export default Drawer;
