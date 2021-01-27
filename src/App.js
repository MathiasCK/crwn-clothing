// Utils
import React from "react";
import { Route, Switch } from "react-router-dom";

// Styles
import "./App.css";

// Components
import Header from "./components/Header.component";

// Pages
import Contact from "./pages/Contact.component";
import HomePage from "./pages/HomePage.component";
import SignInAndSignUpPage from "./pages/Sign-In-And-Sign-Up.component";
import ShopPage from "./pages/Shop.component";

// Firebase
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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

export default App;
