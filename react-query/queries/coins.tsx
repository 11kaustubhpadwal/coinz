import { useQuery } from "@tanstack/react-query";
import { CacheKeys, createCoinWithIdQueryKey } from "../cacheKeys";
import {
  getAllCoins,
  getAllCoinsWithFilters,
  getCoinById,
} from "../../api/services/coins";
import { GetAllCoinsWithFiltersQueryParams } from "../../api/services/coins/types";

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

export const useGetCoinsWithFiltersQuery = (
  queryParams: GetAllCoinsWithFiltersQueryParams
) => {
  return useQuery({
    queryFn: () => getAllCoinsWithFilters(queryParams),
    queryKey: [CacheKeys.GET_ALL_COINS_WITH_FILTERS, [queryParams]],
  });
};
