import { Location } from "@esavaner/home-station";
import { LocationApi } from "api/Location";
import { useMutation } from "react-query";

export const useLocationSet = () => {
  const mutation = useMutation((loc: Location) => LocationApi.setLocation(loc));

  return mutation;
};
