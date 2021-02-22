import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { motion } from "framer-motion";
import { pageAnimation } from "../animations/animations";

import { fetchCollectionsStart } from "../redux/shop/shop.actions";
import Spinner from "../components/spinner/spinner.component";

const CollectionsOverviewContainer = lazy(() =>
  import("../components/collections-overview/Collections-overview.container")
);

const CollectionPageContainer = lazy(() =>
  import("./collection/Collection.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Helmet>
        <title>CRWN Apperal | Shop</title>
      </Helmet>
      <div className="shop-page">
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
        </Suspense>
      </div>
    </motion.div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
