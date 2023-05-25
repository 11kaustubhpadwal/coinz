export enum CacheKeys {
  GET_ALL_COINS = "coins",
  GET_ALL_COINS_WITH_FILTERS = "coins-list",
}

export const createCoinWithIdQueryKey = (coinId: string) =>
  `coin-details-${coinId}`;
