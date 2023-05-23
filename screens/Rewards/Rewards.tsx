import { View } from "react-native";
import LayoutWrapper from "../../components/LayoutWrapper";
import InfoCard from "./InfoCard";
import CardContent from "./InfoCard/CardContent/CardContent";
import { RewardsStyles } from "./stylesheet";
import InfoCardWithIcon from "./InfoCardWithIcon";
import { Colors } from "../../utils/colors";
import ReferIcon from "../../assets/icons/ReferIcon";
import ShareIcon from "../../assets/icons/ShareIcon";

const Rewards = () => {
  return (
    <LayoutWrapper>
      <InfoCard
        cardTitle={"Coupons"}
        cardContent={
          <View>
            <CardContent label={"No. of Coupons won"} value={6} />
            <CardContent label={"Tokens won from Spin so far"} value={8} />
            <CardContent label={"Remaining Coupons to spin"} value={10} />
          </View>
        }
      />
      <View style={RewardsStyles.divider} />
      <InfoCard
        cardTitle={"Referral"}
        cardContent={
          <View>
            <CardContent label={"Total No of referrals"} value={12} />
            <CardContent label={"Total No of Qualified referrals"} value={8} />
          </View>
        }
      />
      <View style={RewardsStyles.divider} />
      <InfoCardWithIcon
        title={"Refer and Earn"}
        subtitle={"Refer your Friend and Win Cryptocoins"}
        buttonText={"Refer Now"}
        icon={<ReferIcon />}
      />
      <View style={RewardsStyles.divider} />
      <InfoCardWithIcon
        title={"Rewards"}
        subtitle={"Like, Share & get free coupons"}
        buttonText={"Share Now"}
        backgroundColor={Colors.Purple}
        icon={<ShareIcon />}
      />
    </LayoutWrapper>
  );
};

export default Rewards;
