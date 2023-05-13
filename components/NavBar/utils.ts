import HomeIcon from "../../assets/icons/HomeIcon";
import MarketIcon from "../../assets/icons/MarketIcon";
import RewardsIcon from "../../assets/icons/RewardsIcon";
import { Screens } from "../../screens";

export const getNavBarIcon = (screen: string) => {
  switch (screen) {
    case Screens.Home:
      return HomeIcon;
    case Screens.Market:
      return MarketIcon;
    case Screens.Rewards:
      return RewardsIcon;
    default:
      return null;
  }
};
