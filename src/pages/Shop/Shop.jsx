import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CategoryPage from "../category/Category";

const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      {/* <Route path="/shop/:categoryId" component={CategoryPage} /> */}
      {/* <Route path="/shop/:id" component={CollectionsOverview} /> */}
    </div>
  );
};

export default ShopPage;
