// Utils
import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selector";

// Styles
import "./App.css";

// Components
import Navbar from "./components/Nav.component";
import Footer from "./components/Footer.component";
import Spinner from "./components/spinner/spinner.component";

// Redux
import { checkUserSession } from "./redux/user/user.actions";
import SideNav from "./components/Side-Nav.component";

// Error
import ErrorBoundary from "./error-boundary.component";

// Pages
const HomePage = lazy(() => import("./pages/HomePage.component"));
const ShopPage = lazy(() => import("./pages/Shop.component"));
const CheckoutPage = lazy(() => import("./pages/Checkout.component"));
const Contact = lazy(() => import("./pages/Contact.component"));
const ItemDetail = lazy(() => import("./components/Item-detail.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/Sign-In-And-Sign-Up.component")
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch, checkUserSession]);

  return (
    <div>
      <Navbar />
      <SideNav />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
};

export default React.memo(App);
