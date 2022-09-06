import { Location } from "@esavaner/home-station";
import { LocationApi } from "api/Location";
import { useMutation } from "react-query";
import {
  NotificationType,
  useNotification,
} from "hooks/Notification/Norification";

export const useLocationSet = () => {
  const { success, error } = useNotification() as NotificationType;
  const mutation = useMutation(
    (loc: Location) => LocationApi.setLocation(loc),
    {
      onSuccess: () => success("Ustawiono lokalizację"),
      onError: () => error("Nie udało się ustawić"),
    }
  );

  return mutation;
};
