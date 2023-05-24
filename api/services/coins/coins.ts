import { API_PATHS, GET_COIN_BY_ID } from "../../paths";
import { GetAllCoinsResponse, GetCoinByIdResponse } from "./types";
import { coinsService } from "../../configuration";

export const getAllCoins = () =>
  coinsService
    .get<GetAllCoinsResponse>(API_PATHS.GET_ALL_COINS)
    .then((response) => response.data);

export const getCoinById = (coinId: string) =>
  coinsService
    .get<GetCoinByIdResponse>(GET_COIN_BY_ID(coinId))
    .then((response) => response.data);
