import { Controller } from "@esavaner/home-station";
import { ControllerApi } from "api/Controller";
import { useMutation } from "react-query";

export const useControllerAdd = (con: Controller) => {
  const mutation = useMutation(() => ControllerApi.addController(con));

  return mutation;
};
