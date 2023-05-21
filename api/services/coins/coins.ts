import { API_PATHS } from "../../paths";
import { GetAllCoinsResponse } from "./types";
import { coinsService } from "../../configuration";

export const getAllCoins = () =>
  coinsService
    .get<GetAllCoinsResponse>(API_PATHS.GET_ALL_COINS)
    .then((response) => response.data);
