import { GetAllCoinsWithFiltersQueryParams } from "./services/coins/types";

export enum API_PATHS {
  BASE_URL = "https://api.coinranking.com/v2/",
  GET_ALL_COINS = "coins?orderBy=price",
}

export const GET_COIN_BY_ID = (coinId: string) =>
  `${API_PATHS.BASE_URL}coin/${coinId}`;

export const GET_COINS_LIST_WITH_FILTERS = (
  queryParams: GetAllCoinsWithFiltersQueryParams
) =>
  `${API_PATHS.BASE_URL}coins?orderBy=${queryParams.orderBy}&timePeriod=${queryParams.timePeriod}`;
