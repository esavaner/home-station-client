import { Sensor } from "@esavaner/home-station";
import { useState } from "react";
import SensorForm from "../SensorForm";
import * as St from "./SensorPane.styles";

type Props = {
  sensor: Sensor;
  onDelete?: (sens: Sensor) => void;
  onEditSave: (sens: Sensor) => void;
};

const SensorPane = ({ sensor, onDelete, onEditSave }: Props) => {
  const [edit, setEdit] = useState(false);

  const save = (sens: Sensor) => {
    setEdit(false);
    onEditSave(sens);
  };

  const cancel = () => {
    setEdit(false);
  };
  return (
    <>
      {edit ? (
        <SensorForm type="edit" onSave={save} onCancel={cancel} />
      ) : (
        <St.SensorTile>
          <span>{sensor.description}</span>
          <St.Edit onClick={() => setEdit(true)} />
          <St.Delete />
        </St.SensorTile>
      )}
    </>
  );
};

export default SensorPane;
