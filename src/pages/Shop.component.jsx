import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchCollectionsStartAsync } from "../redux/shop/shop.actions";

import { motion } from "framer-motion";
import { pageAnimation } from "../animations/animations";

import CollectionsOverviewContainer from "../components/collections-overview/Collections-overview.container";
import CollectionPageContainer from "./collection/Collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;
    return (
      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <Helmet>
          <title>CRWN Clothing | Shop</title>
        </Helmet>
        <div className="shop-page">
          <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
        </div>
      </motion.div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
