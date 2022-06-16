import { useQuery } from "react-query";
import { ApiKeys } from "../../api/keys";
import { StatusApi } from "../../api/Status";

export const useStatuQuery = () => {
  const query = useQuery([ApiKeys.status], () => StatusApi.getStatus(), {
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 1000,
  });

  return { ...query };
};
