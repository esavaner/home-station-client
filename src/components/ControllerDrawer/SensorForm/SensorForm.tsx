import Input from "components/Form/Input";
import Select from "components/Form/Select";
import Option from "components/Form/Option";
import Button from "components/Button";
import { Sensor } from "@esavaner/home-station";
import { useForm } from "react-hook-form";
import * as St from "./SensorForm.styles";
import { useEffect } from "react";

type Props = {
  onSave: (sens: Sensor) => void;
  onCancel?: () => void;
  type: "create" | "edit";
  edited?: Sensor;
};

const SensorForm = ({ onSave, type, onCancel, edited }: Props) => {
  const {
    register: sRegister,
    handleSubmit: sHandleSubmit,
    setValue: sSetValue,
    reset: sReset,
  } = useForm<Sensor>();

  useEffect(() => {
    if (edited) {
      sSetValue("pin", edited.pin);
      sSetValue("description", edited.description);
      sSetValue("type", edited.type);
    } else {
      sReset();
    }
  }, [edited, sReset, sSetValue]);

  return (
    <>
      <St.FormStyled onSubmit={sHandleSubmit(onSave)}>
        <label>Nazwa czujnika</label>
        <Input {...sRegister("description", { required: true })} />
        <label>Pin czujnika</label>
        <Input {...sRegister("pin", { required: true })} />
        <label>Typ czujnika</label>
        <Select {...sRegister("type", { required: true })}>
          <Option value="window">Okno</Option>
          <Option value="gate">Brama garażowa</Option>
          <Option value="rain">Deszcz</Option>
          <Option value="temp">Termometr</Option>
        </Select>
        <St.ButtonPane>
          <Button type="submit">
            {type === "create" ? "Dodaj czujnik" : "Zapisz"}
          </Button>
          <Button onClick={onCancel}>Anuluj</Button>
        </St.ButtonPane>
      </St.FormStyled>
    </>
  );
};

export default SensorForm;
