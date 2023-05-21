import axios from "axios";
import { API_PATHS } from "./paths";

export const coinsService = axios.create({
  baseURL: API_PATHS.BASE_URL,
  headers: {
    "x-access-token": process.env.REACT_APP_API_KEY,
    "Content-Type": "application/json",
  },
});
