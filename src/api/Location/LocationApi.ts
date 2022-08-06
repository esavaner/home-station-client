import { instance } from "api/api.config";
import { Location } from "@esavaner/home-station";

export const getLocation = () =>
  instance.get<Location>("/location").then(({ data }) => data);

export const setLocation = (loc: Location) =>
  instance
    .post<Location>("/location", { location: loc })
    .then(({ data }) => data);

export const clearLocation = () =>
  instance.delete("/location").then(({ data }) => data);
