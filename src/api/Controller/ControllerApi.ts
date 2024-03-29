import { Controller } from "@esavaner/home-station";
import { instance } from "api/api.config";

export const getControllers = () =>
  instance.get<Controller[]>("/controllers").then(({ data }) => data);

export const getController = (con_ip?: string) =>
  con_ip
    ? instance
        .get<Controller>("/controller", {
          params: {
            controller_ip: con_ip,
          },
        })
        .then(({ data }) => data)
    : Promise.resolve(null);

export const addController = (con: Controller) =>
  instance
    .post<Controller>("/controller", { controller: con })
    .then(({ data }) => data);

export const deleteController = (con_ip: string) =>
  instance
    .delete<Controller>("/controller", {
      params: {
        controller_ip: con_ip,
      },
    })
    .then(({ data }) => data);

export const updatewController = (con: Controller) =>
  instance
    .put<Controller>("/controller", { controller: con })
    .then(({ data }) => data);

export const getCheckIp = (ip?: string) =>
  ip
    ? instance
        .get<string>(`${ip.startsWith("http") ? ip : "http://" + ip}/check`)
        .then(({ data }) => data)
    : Promise.resolve(null);
