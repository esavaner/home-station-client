import { Controller, plus_sign, Sensor } from "@esavaner/home-station";
import Button from "components/Button";
import Drawer from "components/Drawer";
import Input from "components/Form/Input";
import Icon from "components/Icon";

import { useControllerAdd } from "hooks/Controller";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { useSensorQuery } from "hooks/Status";
import * as St from "./ControllerDrawer.styles";
import IpCheckPane from "./IpCheckPane";
import SensorForm from "./SensorForm";
import SensorPane from "./SensorPane";

export type SensorsDrawerProps = {
  visible: boolean;
  onClose?: () => void;
  onOk?: () => void;
  edited?: Controller;
};

const SensorsDrawer = ({
  visible,
  onClose,
  onOk,
  edited,
}: SensorsDrawerProps) => {
  const [sensorList, setSensorList] = useState<Sensor[]>([]);
  const [sensorEdit, setSensorEdit] = useState(false);
  const [ip, setIp] = useState("");
  const { mutate: addController } = useControllerAdd();

  const {
    register: cRegister,
    handleSubmit: cHandleSubmit,
    setValue: cSetValue,
    reset: cReset,
    getValues: cGetValues,
  } = useForm<Controller>();

  const submitSensor = (sens: Sensor) => {
    setSensorEdit(false);
    setSensorList((prev) => [...prev, sens]);
  };

  const save = (con: Controller) => {
    if (edited) {
      //update
    } else {
      const newCon: Controller = {
        ...con,
        sensors: sensorList,
      };
      addController(newCon);
    }
    console.log(con);
  };

  const cancel = () => {
    setSensorEdit(false);
  };

  const checkIp = () => {
    const ip = cGetValues("ip");
    setIp(ip);
  };

  useEffect(() => {
    if (edited) {
      cSetValue("name", edited.name);
      cSetValue("ip", edited.ip);
      setSensorList(edited.sensors);
    } else {
      cReset();
      setIp("");
      setSensorEdit(false);
    }
  }, [edited, visible, cReset, cSetValue]);

  return (
    <Drawer $visible={visible} onClose={onClose} $placing="right">
      <St.Container>
        <St.ControllerForm onSubmit={cHandleSubmit(save)}>
          <label>Nazwa kontrolera</label>
          <Input {...cRegister("name", { required: true })} />
          <label>IP kontrolera</label>
          <St.IpCheck>
            <Input {...cRegister("ip", { required: true })} />
            <IpCheckPane onCheck={checkIp} ip={ip} />
          </St.IpCheck>
          <Button style={{ margin: "20px auto 0" }} $fill type="submit">
            {edited ? "Zapisz kontroller" : "Dodaj kontroller"}
          </Button>
        </St.ControllerForm>
        <St.Divider />
        <St.Header>Lista czujników:</St.Header>
        {sensorList.map((sens, index) => (
          <SensorPane
            key={sens.description + index}
            sensor={sens}
            onEditSave={(sens) => console.log(sens)}
          />
        ))}
        {sensorEdit ? (
          <SensorForm onSave={submitSensor} type="create" onCancel={cancel} />
        ) : (
          <Icon onClick={() => setSensorEdit(true)} src={plus_sign} />
        )}
      </St.Container>
    </Drawer>
  );
};

export default SensorsDrawer;
