import { ApiKeys } from "api/keys";
import { ReadApi } from "api/Read";
import { useQuery } from "react-query";

export const useReadQuery = () => {
  const query = useQuery([ApiKeys.read], () => ReadApi.getControllerRead(), {
    refetchOnWindowFocus: true,
    staleTime: 5 * 60 * 1000,
  });

  return query;
};
