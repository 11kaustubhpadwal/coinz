import { useQuery } from "@tanstack/react-query";
import { CacheKeys, createCoinWithIdQueryKey } from "../cacheKeys";
import { getAllCoins, getCoinById } from "../../api/services/coins";

export const useGetAllCoinsQuery = () => {
  return useQuery({
    queryFn: getAllCoins,
    queryKey: [CacheKeys.GET_ALL_COINS],
  });
};

export const useGetCoinByIdQuery = (coinId: string) => {
  return useQuery({
    queryFn: () => getCoinById(coinId),
    queryKey: [createCoinWithIdQueryKey(coinId)],
  });
};
