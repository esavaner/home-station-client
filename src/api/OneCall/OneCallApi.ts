import { instance } from "api/api.config";
import { OneCallModel } from "./OneCallApi.model";

export const getOneCall = () =>
  instance.get<OneCallModel>("/onecall").then(({ data }) => data);
