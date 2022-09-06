import {
  ControllerRead,
  parseSensorIcon,
  parseTempIcon,
} from "@esavaner/home-station";
import * as St from "./ControllerRead.styles";
import { microcontroller, parseTemp } from "@esavaner/home-station";
import React from "react";
import SensorColumn from "./SensorColumn";
import Icon from "components/Icon";
import Divider from "components/Divider";

type Props = {
  controller: ControllerRead;
  onEdit: (ip: string) => void;
};

const ControllerReadCard = ({ controller, onEdit }: Props) => {
  const tempIcon = parseTempIcon(controller.temp);
  return (
    <St.ControllerCard onClick={() => onEdit(controller.ip)}>
      <SensorColumn desc={controller.name}>
        <Icon size="50px" src={microcontroller} />
      </SensorColumn>
      <Divider />
      <SensorColumn desc="Temp. sys.">
        <Icon size="40px" src={tempIcon} />
        <St.State>{parseTemp(controller.temp)}</St.State>
      </SensorColumn>
      {controller.sensors.map((sensor) => {
        const { icon, state } = parseSensorIcon(sensor);
        return (
          <React.Fragment key={sensor.pin + sensor.description}>
            <Divider />
            <SensorColumn desc={sensor.description}>
              <Icon size="40px" src={icon} />
              <St.State>{state}</St.State>
            </SensorColumn>
          </React.Fragment>
        );
      })}
    </St.ControllerCard>
  );
};

export default ControllerReadCard;
