import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import LeaguesDashboard from "./pages/LeaguesDashboard";
import { Route, Routes } from "react-router";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index element={<LeaguesDashboard />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
