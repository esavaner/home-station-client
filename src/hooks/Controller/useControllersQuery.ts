import { ControllerApi } from "api/Controller";
import { ApiKeys } from "api/keys";
import { useQuery } from "react-query";

export const useControllersQuery = () => {
  const query = useQuery(
    [ApiKeys.controller],
    () => ControllerApi.getControllers(),
    {
      refetchOnWindowFocus: true,
      staleTime: 5 * 60 * 1000,
    }
  );

  return query;
};
