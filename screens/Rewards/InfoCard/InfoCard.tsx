import { View } from "react-native";
import Typography from "../../../components/Typography";
import { InfoCardProps } from "./types";
import { InfoCardStyles } from "./stylesheet";

const InfoCard = ({ cardTitle, cardContent }: InfoCardProps) => {
  return (
    <View style={InfoCardStyles.wrapper}>
      <Typography variant={"h3"}>{cardTitle}</Typography>
      <View style={InfoCardStyles.divider} />
      {cardContent}
    </View>
  );
};

export default InfoCard;
