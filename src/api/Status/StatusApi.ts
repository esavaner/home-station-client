import axios from "axios";

import { API_URL } from "../../../config";
import { StatusModel } from "./StatusApi.model";

export const getStatus = () =>
  axios.get<StatusModel>(`${API_URL}/status`).then(({ data }) => data);
