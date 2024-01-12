import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Main from "./Pages/MainPage";
import Categorys from "./Pages/CategoryPage";
import SingleProductPage from "./Pages/SingelProductPage";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/category">
            <Categorys />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;