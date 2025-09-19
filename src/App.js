import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import Provider from "./contexts/Provider";

const App = () => (
  <AuthProvider>
    <Provider>
      <RoutesApp />
      <GlobalStyle />
    </Provider>
  </AuthProvider>
);

export default App;
