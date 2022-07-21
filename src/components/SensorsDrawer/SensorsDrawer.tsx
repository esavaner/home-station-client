import Drawer from "components/Drawer";
import { useSensorsQuery } from "hooks/Status";
import * as St from "./SensorsDrawer.styles";

export type SensorsDrawerProps = {
  visible: boolean;
  onClose?: () => void;
  onOk?: () => void;
};

const SensorsDrawer = ({ visible, onClose, onOk }: SensorsDrawerProps) => {
  const { data: sensors, isLoading } = useSensorsQuery();

  return (
    <Drawer $visible={visible} onClose={onClose}>
      {isLoading && <span>loading...</span>}
      {sensors?.map((sensor) => (
        <St.SensorPane key={sensor.pin + sensor.description}>
          <St.Description>{sensor.description}</St.Description>
          <span>{sensor.pin}</span>
          <span>{sensor.type}</span>
        </St.SensorPane>
      ))}
    </Drawer>
  );
};

export default SensorsDrawer;
