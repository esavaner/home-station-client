import axios from "axios";

import { API_URL } from "../../../config";
import { HistoryModel } from "./HistoryApi.model";

export const getHistory = () =>
  axios.get<HistoryModel>(`${API_URL}/history`).then(({ data }) => data);
