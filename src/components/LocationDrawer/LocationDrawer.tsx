import { Location } from "@esavaner/home-station";
import Button from "components/Button";
import Drawer from "components/Drawer";
import Input from "components/Input";
import Spinner from "components/Spinner";
import { useLocationSet } from "hooks/Location";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as St from "./LocationDrawer.styles";

export type LocationDrawerProps = {
  visible: boolean;
  onClose?: () => void;
  onOk?: () => void;
  location?: Location;
};

const LocationDrawer = ({
  visible,
  onClose,
  onOk,
  location,
}: LocationDrawerProps) => {
  const { register, handleSubmit, setValue } = useForm<Location>();
  const {
    mutate: setLocation,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useLocationSet();
  useEffect(() => {
    console.log(location);
    if (location) {
      setValue("name", location.name);
      setValue("lat", location.lat);
      setValue("lon", location.lon);
    }
  }, [location]);

  const submit = (values: Location) => {
    console.log(values);
    setLocation(values);
  };
  return (
    <Drawer $placing="left" $visible={visible} onClose={onClose}>
      <St.LocationForm onSubmit={handleSubmit(submit)}>
        <label>Miasto</label>
        <Input {...register("name", { required: true })} />
        <label>długość (lon)</label>
        <Input {...register("lon", { required: true })} />
        <label>szerokość (lat)</label>
        <Input {...register("lat", { required: true })} />

        <St.Info>
          <Button type="submit">Ustaw</Button>
          {isLoading && <Spinner />}
          {isSuccess && <>Ustawiono!</>}
          {isError && <>{error}</>}
        </St.Info>
      </St.LocationForm>
    </Drawer>
  );
};

export default LocationDrawer;
