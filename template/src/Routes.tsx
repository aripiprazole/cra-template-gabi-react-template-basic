import React from "react";
import {
  BrowserRouter as Router,
  // @ts-ignore
  Routes as Switch,
  Route
} from "react-router-dom";

import Main from "views/Home/Home";
import NotFound from "views/Errors/NotFound";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </Router>
  );
};

export default Routes;
