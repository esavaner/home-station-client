import { ControllerApi } from "api/Controller";
import { useMutation } from "react-query";
import {
  NotificationType,
  useNotification,
} from "hooks/Notification/Norification";

export const useControllerDelete = () => {
  const { success, error } = useNotification() as NotificationType;
  const mutation = useMutation(
    (con_ip: string) => ControllerApi.deleteController(con_ip),
    {
      onSuccess: () => success("Usunięto"),
      onError: () => error("Nie udało się usunąć"),
    }
  );

  return mutation;
};
