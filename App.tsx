import { NavigationContainer } from "@react-navigation/native";
import NavBar from "./components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <NavBar />
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
