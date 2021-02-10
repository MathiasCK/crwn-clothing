// Utils
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selector";
import { createStructuredSelector } from "reselect";

// Styles
import "./App.css";

// Components
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";

// Pages
import Contact from "./pages/Contact.component";
import HomePage from "./pages/HomePage.component";
import SignInAndSignUpPage from "./pages/Sign-In-And-Sign-Up.component";
import ShopPage from "./pages/Shop.component";
import CheckoutPage from "./pages/Checkout.component";
import ItemDetail from "./components/Item-detail.component";

// Firebase
import {
  auth,
  createUserProfileDocument,
  /*addCollectionAndDocuments, Add to firestore */
} from "./Firebase/Firebase.utils";
import { checkUserSession } from "./redux/user/user.actions";

/* Selectors Add to Firestore
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";*/

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/:collection/:id" component={ItemDetail} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // Add to Firestore collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
