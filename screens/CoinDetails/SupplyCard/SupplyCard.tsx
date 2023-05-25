import { View } from "react-native";
import Typography from "../../../components/Typography";
import { SupplyCardStyles } from "./stylesheet";
import { SupplyCardProps } from "./types";

const SupplyCard = ({ text, color }: SupplyCardProps) => {
  return (
    <View style={SupplyCardStyles.wrapper}>
      <Typography variant="h5" color={color}>
        {text}
      </Typography>
    </View>
  );
};

export default SupplyCard;
