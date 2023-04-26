import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Market from "./screens/Market";
import Rewards from "./screens/Rewards";
import { Screens } from "./screens";
import { RootStackList } from "./types";

const Stack = createNativeStackNavigator<RootStackList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.Home}>
        <Stack.Screen name={Screens.Home} component={Home} />
        <Stack.Screen name={Screens.Market} component={Market} />
        <Stack.Screen name={Screens.Rewards} component={Rewards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
