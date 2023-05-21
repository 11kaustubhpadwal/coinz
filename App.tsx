import { NavigationContainer } from "@react-navigation/native";
import NavBar from "./components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
