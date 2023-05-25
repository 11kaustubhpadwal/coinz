import { View, Pressable } from "react-native";
import { CoinCardProps } from "./types";
import Typography from "../Typography";
import { formatPrice } from "./utils";
import { Colors } from "../../utils/colors";
import { CoinCardStyles } from "./stylesheet";
import UpChartIcon from "../../assets/icons/UpChartIcon";
import DownChartIcon from "../../assets/icons/DownChartIcon";
import { useMemo } from "react";

const CoinCard = ({ coin, ...rest }: CoinCardProps) => {
  const isMarketValueDown = useMemo(() => coin.change?.startsWith("-"), [coin]);

  return (
    <Pressable {...rest}>
      <View style={CoinCardStyles.wrapper}>
        <View style={{ ...CoinCardStyles.icon, backgroundColor: coin.color }} />
        <View style={CoinCardStyles.column2}>
          <Typography variant={"h5"}>{coin.name}</Typography>
          <View style={{ marginBottom: 4 }} />
          <Typography variant={"sub1"} color={Colors.Secondary}>
            {coin.symbol}
          </Typography>
        </View>
        <View>{isMarketValueDown ? <DownChartIcon /> : <UpChartIcon />}</View>
        <View style={CoinCardStyles.column3}>
          <Typography variant={"h5"}>{formatPrice(coin.price)}</Typography>
          <Typography
            variant={"sub1"}
            color={isMarketValueDown ? Colors.Red : Colors.Green}
          >
            {coin.change}%
          </Typography>
        </View>
      </View>
    </Pressable>
  );
};

export default CoinCard;
