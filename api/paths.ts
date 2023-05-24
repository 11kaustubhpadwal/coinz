export enum API_PATHS {
  BASE_URL = "https://api.coinranking.com/v2/",
  GET_ALL_COINS = "coins?orderBy=price",
}

export const GET_COIN_BY_ID = (coinId: string) =>
  `${API_PATHS.BASE_URL}coin/${coinId}`;
