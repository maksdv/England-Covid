import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CovidData from "./components/covidData";
import Loyout from "./loyout";
import "./styles/App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Loyout>
        <CovidData />
      </Loyout>
    </QueryClientProvider>
  );
}

export default App;
