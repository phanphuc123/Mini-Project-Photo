import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AddEditPage from "./pages/AddEdit";
import MainPage from "./pages/Main";

Photo.propTypes = {};

function Photo(props) {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={url} component={MainPage} />

      <Route path={`${url}/add`} component={AddEditPage} />

      <Route path={`${url}/:photoId`} component={AddEditPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Photo;
