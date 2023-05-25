import {
  API_PATHS,
  GET_COINS_LIST_WITH_FILTERS,
  GET_COIN_BY_ID,
} from "../../paths";
import {
  GetAllCoinsResponse,
  GetAllCoinsWithFiltersQueryParams,
  GetCoinByIdResponse,
} from "./types";
import { coinsService } from "../../configuration";

export const getAllCoins = () =>
  coinsService
    .get<GetAllCoinsResponse>(API_PATHS.GET_ALL_COINS)
    .then((response) => response.data);

export const getCoinById = (coinId: string) =>
  coinsService
    .get<GetCoinByIdResponse>(GET_COIN_BY_ID(coinId))
    .then((response) => response.data);

export const getAllCoinsWithFilters = (
  queryParams: GetAllCoinsWithFiltersQueryParams
) =>
  coinsService
    .get<GetAllCoinsResponse>(GET_COINS_LIST_WITH_FILTERS(queryParams))
    .then((response) => response.data);
