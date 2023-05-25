import { useMemo } from "react";
import LayoutWrapper from "../../components/LayoutWrapper";
import Typography from "../../components/Typography";
import { useGetAllCoinsQuery } from "../../react-query/queries/coins";
import { View } from "react-native";
import Loader from "../../components/Loader";
import { MarketStyles } from "./stylesheet";
import Filter from "./Filter";
import { Filters } from "./Filter/types";

const Market = () => {
  const { data, isLoading } = useGetAllCoinsQuery();

  const isMarketDown = useMemo(() => data?.data.stats.totalMarketCap, [data]);

  return (
    <LayoutWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={MarketStyles.wrapper}>
          <Typography variant={"h3"}>Market cap is {isMarketDown}</Typography>
          <View style={MarketStyles.divider1} />
          <Typography variant={"sub1"}>In the past 24 hours</Typography>
          <View style={MarketStyles.divider2} />
          <View style={MarketStyles.filters}>
            <View style={MarketStyles.column1}>
              <Typography variant={"h3"}>Coins</Typography>
            </View>
            <Filter name={Filters.TimePeriods} />
            <Filter name={Filters.OrderBy} />
          </View>
        </View>
      )}
    </LayoutWrapper>
  );
};

export default Market;
