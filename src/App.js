import React from "react";
import { Container } from "./components/StyledComponents/Styles";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <h1> Test</h1>
      </Container>
    </React.Fragment>
  );
}

export default App;
