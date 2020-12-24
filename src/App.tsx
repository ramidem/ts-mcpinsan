import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import "./App.scss";
import About from "./pages/About";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="App__main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
      <div className="App__footer" style={{ backgroundColor: "hotpink" }}>
        Footer
      </div>
    </div>
  );
};

export default App;
