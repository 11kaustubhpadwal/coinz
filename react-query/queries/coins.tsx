import { useQuery } from "@tanstack/react-query";
import { CacheKeys } from "../cacheKeys";
import { getAllCoins } from "../../api/services/coins/coins";

export const useGetAllCoinsQuery = () => {
  return useQuery({
    queryFn: getAllCoins,
    queryKey: [CacheKeys.GET_ALL_COINS],
  });
};
