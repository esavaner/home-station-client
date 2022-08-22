import { ControllerApi } from "api/Controller";
import { useMutation } from "react-query";

export const useControllerDelete = () => {
  const mutation = useMutation((con_ip: string) =>
    ControllerApi.deleteController(con_ip)
  );

  return mutation;
};
