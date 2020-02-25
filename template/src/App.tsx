import React from "react";

import { Provider } from "react-redux";

import Routes from "Routes";
import store from "store";
import GlobalStyle from "styles/GlobalStyle";

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <Routes />
    </Provider>
    <GlobalStyle />
  </>
);

export default App;
