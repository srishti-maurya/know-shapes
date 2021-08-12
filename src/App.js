import "../src/styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import AngleOfTriangle from "../src/pages/angleOfTriangle";
import CheckHypotenuse from "../src/pages/checkHypotenuse";
import AreaCalculator from "../src/pages/areaCalculator";
import Quiz from "../src/pages/quiz";
import Home from "../src/pages/home";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/angleOfTriangle">
            <AngleOfTriangle />
          </Route>
          <Route path="/checkHypotenuse">
            <CheckHypotenuse />
          </Route>
          <Route path="/areaCalculator">
            <AreaCalculator />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
