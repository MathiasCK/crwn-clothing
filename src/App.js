import HomePage from "./pages/HomePage.component";
import { Route, Switch } from "react-router-dom";

// Styles
import "./App.css";

// Components
import Header from "./components/Header.component";

// Pages
import Contact from "./pages/Contact.component";
import SignInAndSignUpPage from "./pages/Sign-In-And-Sign-Up.component";
import ShopPage from "./pages/Shop.component";

function App() {
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

export default App;
