import { useState } from "react";
import LayoutWrapper from "../../components/LayoutWrapper";
import Typography from "../../components/Typography";
import { useGetCoinsWithFiltersQuery } from "../../react-query/queries/coins";
import { FlatList, View } from "react-native";
import Loader from "../../components/Loader";
import { MarketStyles } from "./stylesheet";
import Filter from "./Filter";
import { Filters } from "./Filter/types";
import { orderByOptions, timePeriods } from "./Filter/constants";
import CoinCard from "../../components/CoinCard";
import { MarketProps } from "./types";
import { GetAllCoinsWithFiltersQueryParams } from "../../api/services/coins/types";

const Market = ({ navigation }: MarketProps) => {
  const [queryParams, setQueryParams] =
    useState<GetAllCoinsWithFiltersQueryParams>({
      orderBy: orderByOptions[0].value,
      timePeriod: timePeriods[0].value,
    });

  const { data, isLoading } = useGetCoinsWithFiltersQuery(queryParams);

  return (
    <LayoutWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={MarketStyles.wrapper}>
          <Typography variant={"h3"}>
            Market cap is {data?.data.stats.totalMarketCap}
          </Typography>
          <View style={MarketStyles.divider1} />
          <Typography variant={"sub1"}>In the past 24 hours</Typography>
          <View style={MarketStyles.divider2} />
          <View style={MarketStyles.filters}>
            <View style={MarketStyles.column1}>
              <Typography variant={"h3"}>Coins</Typography>
            </View>
            <Filter
              filterName={Filters.TimePeriods}
              setQueryParams={setQueryParams}
              queryParams={queryParams}
            />
            <Filter
              filterName={Filters.OrderBy}
              setQueryParams={setQueryParams}
              queryParams={queryParams}
            />
          </View>
          {data && data.data.stats.total > 0 && (
            <View style={MarketStyles.listContainer}>
              <FlatList
                data={data.data.coins}
                renderItem={({ item }) => (
                  <CoinCard
                    key={item.uuid}
                    coin={item}
                    onPress={() => {
                      navigation.navigate("CoinDetails", { coinId: item.uuid });
                    }}
                  />
                )}
              />
            </View>
          )}
        </View>
      )}
    </LayoutWrapper>
  );
};

export default Market;
