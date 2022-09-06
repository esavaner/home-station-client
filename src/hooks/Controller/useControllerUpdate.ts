import { Controller } from "@esavaner/home-station";
import { ControllerApi } from "api/Controller";
import { useMutation } from "react-query";
import {
  NotificationType,
  useNotification,
} from "hooks/Notification/Norification";

export const useControllerUpdate = () => {
  const { success, error } = useNotification() as NotificationType;
  const mutation = useMutation(
    (con: Controller) => ControllerApi.updatewController(con),
    {
      onSuccess: () => success("Zapisano"),
      onError: () => error("Nie udało się zapisać"),
    }
  );

  return mutation;
};
