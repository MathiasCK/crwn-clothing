import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionsOverview from "../components/Collections-overview.component";
import WithSpinner from "../components/With-spinner.component";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../Firebase/Firebase.utils";
import { updateCollections } from "../redux/shop/shop.actions";
import CollectionPage from "./Collection.component";

import { motion } from "framer-motion";
import { pageAnimation } from "../animations/animations";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
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
            render={(props) => (
              <CollectionOverviewWithSpinner isLoading={loading} {...props} />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={(props) => (
              <CollectionPageWithSpinner isLoading={loading} {...props} />
            )}
          />
        </div>
      </motion.div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
