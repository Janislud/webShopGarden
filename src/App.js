import React from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { GoodsPage } from "./Components/GoodsPageCategory/GoodsPage";
import SingleProduct from "./Components/SingelProduct/SingelProduct";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Categorys from "./Pages/CategoryPage";
import { GoodsFromCategory } from "./Pages/GoodsFromCategory";
import Main from "./Pages/MainPage";
import { ApiProvider } from "./contexts";

function App() {
  return (
    <Router>
      <ApiProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/category" component={Categorys} />
            <Route path="/single-product" component={SingleProduct} />
            <Route path="/goods-page" component={GoodsPage} />
            <Redirect from="/" to="/main" />
          </Switch>
          <GoodsFromCategory />
          <Footer />
        </div>
      </ApiProvider>
    </Router>
  );
}

export default App;
