import { ApiKeys } from "api/keys";
import { OneCallApi } from "api/OneCall";
import { useQuery } from "react-query";

export const useOneCallQuery = () => {
  const query = useQuery([ApiKeys.onecall], () => OneCallApi.getOneCall(), {
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 1000,
  });

  return query;
};
