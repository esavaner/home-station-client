import { instance } from "api/api.config";
import { StatusModel } from "./StatusApi.model";

export const getStatus = () =>
  instance.get<StatusModel>(`/status`).then(({ data }) => data);
