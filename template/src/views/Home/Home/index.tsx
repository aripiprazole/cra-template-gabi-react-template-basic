import React from "react";

import logo from "assets/logo.svg";
// @ts-ignore
import { Outlet } from "react-router-dom";
import { AppHeader, Container, AppLink, AppLogo } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
        <Outlet />
      </AppHeader>
    </Container>
  );
};

export default Main;
