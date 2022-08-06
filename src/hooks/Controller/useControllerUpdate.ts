import { Controller } from "@esavaner/home-station";
import { ControllerApi } from "api/Controller";
import { useMutation } from "react-query";

export const useControllerUpdate = (con: Controller) => {
  const mutation = useMutation(() => ControllerApi.updatewController(con));

  return mutation;
};
