import { Controller } from "@esavaner/home-station";
import { ControllerApi } from "api/Controller";
import { useMutation } from "react-query";
import {
  NotificationType,
  useNotification,
} from "hooks/Notification/Norification";

export const useControllerAdd = () => {
  const { success, error } = useNotification() as NotificationType;
  const mutation = useMutation(
    (con: Controller) => ControllerApi.addController(con),
    {
      onSuccess: () => success("Dodano"),
      onError: () => error("Nie udało się dodać"),
    }
  );

  return mutation;
};
