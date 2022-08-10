import { ControllerApi } from "api/Controller";
import { ApiKeys } from "api/keys";
import { useQuery } from "react-query";

export const useGetCheckIp = (ip: string) => {
  const query = useQuery(
    [ApiKeys.checkIp],
    () => ControllerApi.getCheckIp(ip),
    { enabled: false }
  );

  return query;
};
