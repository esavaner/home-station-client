import { Controller } from "@esavaner/home-station";
import { ControllerApi } from "api/Controller";
import { useMutation } from "react-query";

export const useControllerAdd = () => {
  const mutation = useMutation((con: Controller) =>
    ControllerApi.addController(con)
  );

  return mutation;
};
