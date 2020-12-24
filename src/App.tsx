import React from "react";
import Navigation from "./components/Navigation";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="App__main" style={{ backgroundColor: "blue" }}>
        Main Content
      </div>
      <div className="App__footer" style={{ backgroundColor: "red" }}>
        Footer
      </div>
    </div>
  );
};

export default App;
