import { View } from "react-native";
import { InfoCardWithIconStyles } from "./stylesheet";
import { InfoCardWithIconProps } from "./types";
import { Colors } from "../../../utils/colors";
import Typography from "../../../components/Typography";
import Button from "../../../components/Button/Button";

const InfoCardWithIcon = ({
  title,
  subtitle,
  buttonText,
  icon,
  backgroundColor = Colors.Orange,
}: InfoCardWithIconProps) => {
  return (
    <View style={{ ...InfoCardWithIconStyles.wrapper, backgroundColor }}>
      <View style={InfoCardWithIconStyles.column1}>
        <Typography variant={"sub1"} color="white">
          {title}
        </Typography>
        <View style={InfoCardWithIconStyles.divider} />
        <Typography variant={"h3"} color="white">
          {subtitle}
        </Typography>
        <Button
          variant={"secondary"}
          text={buttonText}
          style={InfoCardWithIconStyles.button}
        />
      </View>
      <View style={InfoCardWithIconStyles.column2}>{icon}</View>
    </View>
  );
};

export default InfoCardWithIcon;
