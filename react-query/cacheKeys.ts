export enum CacheKeys {
  GET_ALL_COINS = "coins",
}

export const createCoinWithIdQueryKey = (coinId: string) =>
  `coin-details-${coinId}`;
