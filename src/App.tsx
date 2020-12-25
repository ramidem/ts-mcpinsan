import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import "./App.scss";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navigation />
        <div className="App">
          <div className="App__main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/menu" component={Menu} />
            </Switch>
          </div>
        </div>
      </Router>
      <div className="App__footer" style={{ backgroundColor: "hotpink" }}>
        Footer
      </div>
    </>
  );
};

export default App;
