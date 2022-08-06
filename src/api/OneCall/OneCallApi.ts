import { instance } from "api/api.config";
import { OneCallModel } from "@esavaner/home-station";

export const getOneCall = () =>
  instance.get<OneCallModel>("/onecall").then(({ data }) => data);
