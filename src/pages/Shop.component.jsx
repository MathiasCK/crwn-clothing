import React from "react";
import { Helmet } from "react-helmet";
import CollectionPreview from "../components/Collection-preveiw.component";
import SHOP_DATA from "./Shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <>
        <Helmet>
          <title>CRWN Clothing | Shop</title>
        </Helmet>
        <div className="shop-page">
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
      </>
    );
  }
}

export default ShopPage;
