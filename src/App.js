import HomePage from "./pages/homepage/HomePage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/Shop.component";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
