import { Weather } from "api/OneCall/OneCallApi.model";
import { OneCallImages } from "assets/oneCallImages";

export const parseTemp = (temp: number, round: number = 1) =>
  `${temp ? temp.toFixed(round) : "--"}°C`;

export const parseIcon = (wth: Weather[]) =>
  OneCallImages[wth[0].icon as keyof typeof OneCallImages];
