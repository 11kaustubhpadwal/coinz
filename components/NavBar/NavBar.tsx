import Typography from "../Typography";
import { Screens } from "../../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Market from "../../screens/Market";
import Rewards from "../../screens/Rewards";
import { View } from "react-native";
import { Pressable } from "react-native";
import { Colors } from "../../utils/colors";
import { NavBarStyles } from "./stylesheet";
import { getNavBarIcon } from "./utils";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      tabBar={({ state, navigation }) => {
        return (
          <View style={NavBarStyles.wrapper}>
            {state.routes.map((route, index) => {
              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              const onLongPress = () => {
                navigation.emit({
                  type: "tabLongPress",
                  target: route.key,
                });
              };

              const Icon = getNavBarIcon(route.name);

              return (
                <Pressable
                  key={`bottom-navigation-item-${index}`}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={NavBarStyles.item}
                >
                  <Icon fill={isFocused ? Colors.Primary : Colors.Secondary} />
                  <Typography
                    variant="sub1"
                    color={isFocused ? Colors.Primary : Colors.Secondary}
                  >
                    {route.name}
                  </Typography>
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen name={Screens.Home} component={Home} />
      <Tab.Screen name={Screens.Market} component={Market} />
      <Tab.Screen name={Screens.Rewards} component={Rewards} />
    </Tab.Navigator>
  );
};

export default NavBar;
