import { View, Image } from "react-native";
import { CoinCardProps } from "./types";
import Typography from "../../../components/Typography";
import { SvgUri } from "react-native-svg";
import { formatPrice } from "./utils";
import { Colors } from "../../../utils/colors";
import { CoinCardStyles } from "./stylesheet";
import UpChartIcon from "../../../assets/icons/UpChartIcon";
import DownChartIcon from "../../../assets/icons/DownChartIcon";
import { useMemo } from "react";

const CoinCard = ({ coin }: CoinCardProps) => {
  const marketValue = useMemo(() => coin.change.startsWith("-"), [coin]);
  const isSvg = useMemo(() => coin.iconUrl.endsWith("svg"), [coin]);

  return (
    <View style={CoinCardStyles.wrapper}>
      {isSvg ? (
        <SvgUri
          width={40}
          height={40}
          uri={coin.iconUrl}
          style={CoinCardStyles.svgImage}
        />
      ) : (
        <Image source={{ uri: coin.iconUrl }} style={CoinCardStyles.image} />
      )}
      <View style={CoinCardStyles.column2}>
        <Typography variant={"h5"}>{coin.name}</Typography>
        <View style={{ marginBottom: 4 }} />
        <Typography variant={"sub1"} color={Colors.Secondary}>
          {coin.symbol}
        </Typography>
      </View>
      <View>{marketValue ? <DownChartIcon /> : <UpChartIcon />}</View>
      <View style={CoinCardStyles.column3}>
        <Typography variant={"h5"}>{formatPrice(coin.price)}</Typography>
        <Typography
          variant={"sub1"}
          color={marketValue ? Colors.Red : Colors.Green}
        >
          {coin.change}%
        </Typography>
      </View>
    </View>
  );
};

export default CoinCard;
