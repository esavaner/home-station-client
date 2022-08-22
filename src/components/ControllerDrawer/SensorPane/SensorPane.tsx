import { Sensor } from "@esavaner/home-station";
import Confirm from "components/Confirm";
import { useState } from "react";
import SensorForm from "../SensorForm";
import * as St from "./SensorPane.styles";

type Props = {
  sensor: Sensor;
  onDelete: () => void;
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
        <SensorForm
          type="edit"
          onSave={save}
          onCancel={cancel}
          edited={sensor}
        />
      ) : (
        <St.SensorTile>
          <span>{sensor.description}</span>
          <St.Edit onClick={() => setEdit(true)} />
          <Confirm icon={<St.Delete />} onOk={() => onDelete()} />
        </St.SensorTile>
      )}
    </>
  );
};

export default SensorPane;
