import React from "react";
import { Route } from "react-router-dom";
import CollectionsPage from "./CollectionsPage";
import ItemPage from "./ItemPage";

const Shopz = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsPage} />
      <Route path={`${match.path}/:id`} component={ItemPage} />
    </div>
  );
};

export default Shopz;
