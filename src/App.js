import React from "react";
import { Container } from "./components/StyledComponents/Styles";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "black",
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <h1> Test</h1>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
