import { View } from "react-native";
import Typography from "../../../../components/Typography";
import { CardContentStyles } from "./stylesheet";
import { CardContentProps } from "./types";
import { Colors } from "../../../../utils/colors";

const CardContent = ({ label, value }: CardContentProps) => {
  return (
    <View style={CardContentStyles.wrapper}>
      <View style={CardContentStyles.column1}>
        <Typography variant={"sub1"} color={Colors.Secondary}>
          {label}
        </Typography>
      </View>
      <Typography variant={"h6"}>{value}</Typography>
    </View>
  );
};

export default CardContent;
