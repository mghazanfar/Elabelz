import React, { Component } from "react";
import AppBar from "./components/AppBar";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Root from "./components/Root";
import Men from "./components/Men";

class App extends Component {
  render() {
    return (
      <Router>
        <AppBar
          title={
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Elabelz
            </Link>
          }
        >
          <Switch>
            <Route exact path="/" component={Root} />
            <Route path="/men-clothing" component={Men} />
          </Switch>
        </AppBar>
      </Router>
    );
  }
}

export default App;
