import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Main from "./Pages/MainPage";
import Categorys from "./Pages/CategoryPage";
import { ApiProvider } from "./contexts";

function App() {
  return (
    <Router>
      <ApiProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/category" component={Categorys}/>
            <Redirect from="/" to="/main" />
          </Switch>
          <Footer />
        </div>
      </ApiProvider>
    </Router>
  );
}

export default App;