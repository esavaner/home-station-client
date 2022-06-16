import { instance } from "api/api.config";

import { HistoryModel } from "./HistoryApi.model";

export const getHistory = () =>
  instance.get<HistoryModel>(`/history`).then(({ data }) => data);
