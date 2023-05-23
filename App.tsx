import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CoinDetails from "./screens/CoinDetails";
import { createStackNavigator } from "@react-navigation/stack";
import { Screens } from "./screens";
import { RootStackParamList } from "./types";
import Root from "./screens/Root/Root";

const queryClient = new QueryClient();

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={Screens.Root}
              component={Root}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={Screens.CoinDetails}
              component={CoinDetails}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
