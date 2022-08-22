import { Controller } from "@esavaner/home-station";
import { ControllerApi } from "api/Controller";
import { useMutation } from "react-query";

export const useControllerUpdate = () => {
  const mutation = useMutation((con: Controller) =>
    ControllerApi.updatewController(con)
  );

  return mutation;
};
