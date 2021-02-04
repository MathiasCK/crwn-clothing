import React from "react";
import { Helmet } from "react-helmet";
import CollectionsOverview from "../components/Collections-overview.component";

const ShopPage = () => {
  return (
    <div>
      <Helmet>
        <title>CRWN Clothing | Shop</title>
      </Helmet>
      <div className="shop-page">
        <CollectionsOverview />
      </div>
    </div>
  );
};

export default ShopPage;
