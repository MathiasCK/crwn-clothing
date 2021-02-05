import React from "react";
import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";
import CollectionsOverview from "../components/Collections-overview.component";
import CollectionPage from "./Collection.component";

const ShopPage = ({ match }) => {
  return (
    <div>
      <Helmet>
        <title>CRWN Clothing | Shop</title>
      </Helmet>
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    </div>
  );
};

export default ShopPage;
