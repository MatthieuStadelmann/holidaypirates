import "./App.css";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import { client } from "./lib/apollo";
import { HotelList } from "./components/HotelList";
import Header from "./components/Header";

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <HotelList />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
