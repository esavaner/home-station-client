import { useQuery } from "react-query";
import { HistoryApi } from "../../api/History";
import { ApiKeys } from "../../api/keys";

export const useHistoryQuery = () => {
  const query = useQuery([ApiKeys.history], () => HistoryApi.getHistory(), {
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 1000,
  });

  return { ...query };
};
