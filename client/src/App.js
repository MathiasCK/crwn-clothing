// Utils
import React, { useEffect } from "react";
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

// Redux
import { checkUserSession } from "./redux/user/user.actions";
import SideNav from "./components/Side.header.component";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <SideNav />
      <Switch>
        <Route path="/404" component={404} />
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/:collection/:id" component={ItemDetail} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
      {/* <Footer />*/}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
