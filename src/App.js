// Utils
import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

// Styles
import "./App.css";

// Components
import Header from "./components/Header.component";

// Pages
import Contact from "./pages/Contact.component";
import HomePage from "./pages/HomePage.component";
import SignInAndSignUpPage from "./pages/Sign-In-And-Sign-Up.component";
import ShopPage from "./pages/Shop.component";
import { setCurrentUser } from "./redux/user/user.actions";

// Firebase
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
