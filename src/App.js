import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

// Testing
// import Home from "./pages/Home";
// import Users from "./pages/Users";
// import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// import Shopz from "./pages/Shopz";

// Pages
import Homepage from "./pages/Homepage/Homepage";
import HatsPage from "./pages/HatsPage/HatsPage";
import Header from "./components/headers/Header";
import Authentication from "./pages/Authentication/Authentication";
import CheckoutPage from "./pages/checkout/checkout";
import Store from "./pages/Store/Store";
import ShopPage from "./pages/ShopPage/ShopPage";

// firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

// Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/UserAction";

// Selectors
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./Redux/User/userSelectors";

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/hats" component={HatsPage} />
          <Route path="/store" component={Store} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Authentication />
            }
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
