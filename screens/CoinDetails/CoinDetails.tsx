import Typography from "../../components/Typography";
import { CoinDetailsProps } from "./types";
import LayoutWrapper from "../../components/LayoutWrapper";
import { useGetCoinByIdQuery } from "../../react-query/queries/coins";
import Loader from "../../components/Loader";
import { Pressable, View } from "react-native";
import BackIcon from "../../assets/icons/BackIcon";
import React, { useMemo } from "react";
import { CoinDetailsStyles } from "./stylesheet";
import { formatPrice } from "../Home/CoinCard/utils";
import { Colors } from "../../utils/colors";
import Button from "../../components/Button/Button";

const CoinDetails = ({ route, navigation }: CoinDetailsProps) => {
  const { data, isLoading } = useGetCoinByIdQuery(route.params.coinId);

  const isPriceDown = useMemo(
    () => coinDetails?.change.startsWith("-"),
    [data]
  );

  const coinDetails = useMemo(() => data?.data.coin, [data]);

  return (
    <LayoutWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <View>
          <View style={CoinDetailsStyles.topBar}>
            <Pressable onPress={() => navigation.navigate("Home")}>
              <BackIcon />
            </Pressable>
            <View
              style={{
                ...CoinDetailsStyles.coinIcon,
                backgroundColor: coinDetails?.color,
              }}
            />
            <Typography variant={"h4"}>{coinDetails?.name}</Typography>
            <View style={CoinDetailsStyles.symbol}>
              <Typography
                variant={"sub1"}
              >{`(${coinDetails?.symbol})`}</Typography>
            </View>
          </View>
          <View style={CoinDetailsStyles.divider} />
          <View style={CoinDetailsStyles.price}>
            <Typography variant="h1">
              {formatPrice(coinDetails?.price)}
            </Typography>
            <Typography
              variant="h3"
              color={isPriceDown ? Colors.Red : Colors.Green}
            >
              {`(${coinDetails?.change}%)`}
            </Typography>
          </View>
          <View style={CoinDetailsStyles.divider} />
          <Typography variant="h3" color={Colors.Secondary}>
            {coinDetails?.btcPrice} BTC
          </Typography>
          <View style={CoinDetailsStyles.divider2} />
          <Typography variant="h5" color={Colors.Primary}>
            All time high: {formatPrice(coinDetails?.allTimeHigh.price)}
          </Typography>
          <View style={CoinDetailsStyles.divider} />
          <Typography variant="h4">{coinDetails?.description}</Typography>
          <View style={CoinDetailsStyles.divider2} />
          <Typography variant="h5" color={Colors.Primary}>
            Supply
          </Typography>
          <View style={CoinDetailsStyles.divider3} />
          <View style={CoinDetailsStyles.supplyCard}>
            <Typography variant="h5" color={Colors.Orange}>
              Maximum: {coinDetails?.supply.max || "-"}
            </Typography>
          </View>
          <View style={CoinDetailsStyles.supplyCard}>
            <Typography variant="h5" color={Colors.Secondary}>
              Circulating: {coinDetails?.supply.circulating || "-"}
            </Typography>
          </View>
          <View style={CoinDetailsStyles.supplyCard}>
            <Typography variant="h5" color={Colors.Green}>
              Confirmed: {coinDetails?.supply.confirmed || "-"}
            </Typography>
          </View>
          <View style={CoinDetailsStyles.supplyCard}>
            <Typography variant="h5" color={Colors.Primary}>
              Total: {coinDetails?.supply.total || "-"}
            </Typography>
          </View>
          <View style={CoinDetailsStyles.divider2} />
          <Button variant={"primary"} text={"BUY"} />
          <View style={CoinDetailsStyles.divider3} />
          <Button variant={"primary"} text={"SELL"} />
        </View>
      )}
    </LayoutWrapper>
  );
};

export default CoinDetails;
