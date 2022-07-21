import { useQuery } from "react-query";
import { ApiKeys } from "../../api/keys";
import { StatusApi } from "../../api/Status";

export const useSensorsQuery = () => {
  const query = useQuery([ApiKeys.sensors], () => StatusApi.getSensors(), {
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 1000,
  });

  return query;
};
