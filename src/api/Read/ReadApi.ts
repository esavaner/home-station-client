import { ControllerRead } from "@esavaner/home-station";
import { instance } from "api/api.config";

export const getControllerRead = () =>
  instance.get<ControllerRead[]>("/controller_read").then(({ data }) => data);
