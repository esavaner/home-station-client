import { ControllerApi } from "api/Controller";
import { useMutation } from "react-query";

export const useControllerDelete = (con_ip: string) => {
  const mutation = useMutation(() => ControllerApi.deleteController(con_ip));

  return mutation;
};
