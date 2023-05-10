import React from "react";
import HomePage from "./pages/HomePage";
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom/cjs/react-router-dom.min";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
