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
  onEdit: (con: ControllerRead) => void;
};

const ControllerReadCard = ({ controller, onEdit }: Props) => {
  const tempIcon = parseTempIcon(parseFloat(controller.temp));
  return (
    <St.ControllerCard onClick={() => onEdit(controller)}>
      <SensorColumn desc={controller.name}>
        <Icon size="40px" src={microcontroller} />
      </SensorColumn>
      <Divider />
      <SensorColumn desc="Temp. sys.">
        <Icon src={tempIcon} />
        <span>{parseTemp(parseFloat(controller.temp))}</span>
      </SensorColumn>
      {controller.sensors.map((sensor) => {
        const { icon, state } = parseSensorIcon(sensor);
        return (
          <React.Fragment key={sensor.pin + sensor.description}>
            <Divider />
            <SensorColumn desc={sensor.description}>
              <Icon src={icon} />
              <span style={{ textTransform: "uppercase" }}>{state}</span>
            </SensorColumn>
          </React.Fragment>
        );
      })}
    </St.ControllerCard>
  );
};

export default ControllerReadCard;
