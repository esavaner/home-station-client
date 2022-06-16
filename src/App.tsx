import axios from "axios";
import { API_URL } from "config";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContainer from "./layout/AppContainer";
import MainPage from "./pages/MainPage";

function App() {
  const queryClient = new QueryClient();
  axios.defaults.baseURL = API_URL;
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </QueryClientProvider>
  );
}

export default App;
