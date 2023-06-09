import Typography from "../../components/Typography";
import { CoinDetailsProps } from "./types";
import LayoutWrapper from "../../components/LayoutWrapper";
import { useGetCoinByIdQuery } from "../../react-query/queries/coins";
import Loader from "../../components/Loader";
import { Pressable, View } from "react-native";
import BackIcon from "../../assets/icons/BackIcon";
import React, { useCallback, useMemo } from "react";
import { CoinDetailsStyles } from "./stylesheet";
import { formatPrice } from "../../components/CoinCard/utils";
import { Colors } from "../../utils/colors";
import Button from "../../components/Button";
import SupplyCard from "./SupplyCard";

const CoinDetails = ({ route, navigation }: CoinDetailsProps) => {
  const { data, isLoading } = useGetCoinByIdQuery(route.params.coinId);

  const isPriceDown = useMemo(
    () => coinDetails?.change.startsWith("-"),
    [data]
  );

  const coinDetails = useMemo(() => data?.data.coin, [data]);

  const goBackToPreviousScreen = useCallback(
    () => navigation.goBack(),
    [navigation]
  );

  return (
    <LayoutWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={CoinDetailsStyles.wrapper}>
          <View style={CoinDetailsStyles.topBar}>
            <Pressable onPress={goBackToPreviousScreen}>
              <BackIcon />
            </Pressable>
            <View
              style={{
                ...CoinDetailsStyles.coinIcon,
                backgroundColor: coinDetails?.color,
              }}
            />
            <View style={CoinDetailsStyles.coinName}>
              <Typography variant={"h4"}>{coinDetails?.name}</Typography>
            </View>
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
          <SupplyCard
            text={`Maximum: ${coinDetails?.supply.max || "N/A"}`}
            color={Colors.Orange}
          />
          <SupplyCard
            text={`Circulating: ${coinDetails?.supply.circulating || "N/A"}`}
            color={Colors.Secondary}
          />
          <SupplyCard
            text={`Confirmed: ${
              (coinDetails?.supply.confirmed ? "Yes" : "No") || "N/A"
            }`}
            color={Colors.Green}
          />
          <SupplyCard
            text={`Total: ${coinDetails?.supply.total || "N/A"}`}
            color={Colors.Primary}
          />
          <View style={CoinDetailsStyles.actionButtons}>
            <View style={CoinDetailsStyles.column1}>
              <Button
                variant={"outlined"}
                text={"Back"}
                onPress={goBackToPreviousScreen}
              />
            </View>
            <View style={CoinDetailsStyles.column1}>
              <Button variant={"primary"} text={"BUY"} />
            </View>
          </View>
        </View>
      )}
    </LayoutWrapper>
  );
};

export default CoinDetails;
