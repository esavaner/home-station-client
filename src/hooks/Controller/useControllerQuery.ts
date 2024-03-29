import { ControllerApi } from "api/Controller";
import { ApiKeys } from "api/keys";
import { useQuery } from "react-query";

export const useControllerQuery = (ip?: string) => {
  const query = useQuery(
    [ApiKeys.controller],
    () => ControllerApi.getController(ip),
    {
      refetchOnWindowFocus: true,
      staleTime: 5 * 60 * 1000,
      enabled: !!ip,
    }
  );

  return query;
};
