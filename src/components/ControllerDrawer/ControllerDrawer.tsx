import { Sensor } from "@esavaner/home-station";
import Drawer from "components/Drawer";
// import { useSensorQuery } from "hooks/Status";
import * as St from "./ControllerDrawer.styles";

export type SensorsDrawerProps = {
  visible: boolean;
  onClose?: () => void;
  onOk?: () => void;
};

const SensorsDrawer = ({ visible, onClose, onOk }: SensorsDrawerProps) => {
  // const { data: sensors, isLoading } = useSensorQuery();

  return (
    <Drawer $visible={visible} onClose={onClose} $placing="right">
      {/* {isLoading && <span>loading...</span>} */}
      {/* {sensors?.map((sensor: Sensor) => (
        <St.SensorPane key={sensor.pin + sensor.description}>
          <St.Description>{sensor.description}</St.Description>
          <span>{sensor.pin}</span>
          <span>{sensor.type}</span>
        </St.SensorPane>
      ))} */}
    </Drawer>
  );
};

export default SensorsDrawer;
