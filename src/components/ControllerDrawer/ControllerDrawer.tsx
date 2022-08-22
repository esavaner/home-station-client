import { Controller, plus_sign, Sensor } from "@esavaner/home-station";
import Button from "components/Button";
import Confirm from "components/Confirm";
import Divider from "components/Divider";
import Drawer from "components/Drawer";
import Input from "components/Form/Input";
import Icon from "components/Icon";

import {
  useControllerAdd,
  useControllerDelete,
  useControllerUpdate,
} from "hooks/Controller";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { useSensorQuery } from "hooks/Status";
import * as St from "./ControllerDrawer.styles";
import IpCheckPane from "./IpCheckPane";
import SensorForm from "./SensorForm";
import SensorPane from "./SensorPane";

export type ControllerDrawerProps = {
  visible: boolean;
  onClose?: () => void;
  onOk?: () => void;
  edited?: Controller;
};

const ControllerDrawer = ({
  visible,
  onClose,
  onOk,
  edited,
}: ControllerDrawerProps) => {
  const [sensorList, setSensorList] = useState<Sensor[]>([]);
  const [sensorCreation, setSensorCreation] = useState(false);
  const [ip, setIp] = useState("");
  const { mutate: addController } = useControllerAdd();
  const { mutate: updateController } = useControllerUpdate();
  const { mutate: deleteController } = useControllerDelete();

  const {
    register: cRegister,
    handleSubmit: cHandleSubmit,
    setValue: cSetValue,
    reset: cReset,
    getValues: cGetValues,
  } = useForm<Controller>();

  /*********************************************/
  /* controller */

  const save = (con: Controller) => {
    const newCon: Controller = {
      ...con,
      sensors: sensorList,
    };
    if (edited) {
      updateController(newCon);
    } else {
      addController(newCon);
    }
  };

  const deleteC = () => {
    edited && deleteController(edited?.ip);
  };

  /*********************************************/
  /* sensor */

  const cancel = () => {
    setSensorCreation(false);
  };

  const submitSensor = (sens: Sensor) => {
    setSensorCreation(false);
    setSensorList((prev) => [...prev, sens]);
  };

  const deleteSensor = (index: number) => {
    setSensorList((oldList) => {
      const newList = [...oldList];
      newList.splice(index, 1);
      return newList;
    });
  };

  const updateSensor = (sens: Sensor, index: number) => {
    setSensorList((oldList) => {
      const newList = [...oldList];
      newList[index] = sens;
      return newList;
    });
  };

  /*********************************************/
  /* other */

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
      setSensorList([]);
    }
    setSensorCreation(false);
  }, [edited, visible, cReset, cSetValue]);

  return (
    <Drawer
      $visible={visible}
      onClose={onClose}
      $placing="right"
      header={edited && <Confirm icon={<St.Trash />} onOk={deleteC} />}
    >
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
        <Divider mode="horizontal" />
        <St.Header>Lista czujników:</St.Header>
        {sensorList.map((sens, index) => (
          <SensorPane
            key={sens.description + index}
            sensor={sens}
            onEditSave={(sens) => updateSensor(sens, index)}
            onDelete={() => deleteSensor(index)}
          />
        ))}
        {sensorCreation ? (
          <SensorForm onSave={submitSensor} type="create" onCancel={cancel} />
        ) : (
          <Icon onClick={() => setSensorCreation(true)} src={plus_sign} />
        )}
      </St.Container>
    </Drawer>
  );
};

export default ControllerDrawer;
