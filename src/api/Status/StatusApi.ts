import { instance } from "api/api.config";
import { Sensor, StatusModel } from "./StatusApi.model";

export const getStatus = () =>
  instance.get<StatusModel>(`/status`).then(({ data }) => data);

export const getSensors = () =>
  instance.get<Sensor[]>("/sensors").then(({ data }) => data);
