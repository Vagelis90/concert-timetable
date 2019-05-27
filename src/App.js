import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Events from "./Events";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={CurrentEvents} />
        <Route exact path="/all" component={AllEvents} />
        <Route exact path="/next" component={NextEvents} />
        <Route exact path="/map" component={Map} />

        <NavLink to="/map" activeClassName="active">
          <button id="mapBtn" class="btn btn-danger ml-2">
            Map
          </button>
        </NavLink>

        <div class="btn-group mb-3 float-right mr-2">
          <NavLink to="/" exact activeClassName="active">
            <button id="currentBtn" class="btn btn-danger">
              Current
            </button>
          </NavLink>
          {/* <NavLink to="/next" activeClassName="active">
            <button id="nextBtn" class="btn btn-danger">
              Next
            </button>
          </NavLink> */}
          <NavLink to="/all" activeClassName="active">
            <button id="allBtn" class="btn btn-danger">
              All
            </button>
          </NavLink>
        </div>
      </Router>
    );
  }
}

class Map extends Component {
  render() {
    return <img alt="Map" src="./add-2019-map.jpg" />;
  }
}

class CurrentEvents extends Component {
  render() {
    return <Events state="current" />;
  }
}

class AllEvents extends Component {
  render() {
    return <Events state="all" />;
  }
}

class NextEvents extends Component {
  render() {
    return <Events state="next" />;
  }
}

export default App;
