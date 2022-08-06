import { ApiKeys } from "api/keys";
import { LocationApi } from "api/Location";
import { useQuery } from "react-query";

export const useLocationQuery = () => {
  const query = useQuery([ApiKeys.location], () => LocationApi.getLocation(), {
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 1000,
  });

  return query;
};
