import { PressableProps } from "react-native";
import { Coin } from "../../../api/services/coins/types";

export interface CoinCardProps extends PressableProps {
  coin: Coin;
}
