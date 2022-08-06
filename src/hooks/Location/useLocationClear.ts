import { LocationApi } from "api/Location";
import { useMutation } from "react-query";

export const useLocationClear = () => {
  const mutation = useMutation(() => LocationApi.clearLocation());

  return mutation;
};
