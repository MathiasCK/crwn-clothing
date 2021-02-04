import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../components/Collection-preveiw.component";
import { shopCollections } from "../redux/cart/shop/shop.selectors";

const ShopPage = ({ collections }) => {
  return (
    <div>
      <Helmet>
        <title>CRWN Clothing | Shop</title>
      </Helmet>
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: shopCollections,
});

export default connect(mapStateToProps)(ShopPage);
