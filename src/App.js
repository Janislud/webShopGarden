import React from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import SingleProduct from "./Components/SingelProduct/SingelProduct";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import { GoodsFromCategory } from "./Pages/AllProductPage";
import Categorys from "./Pages/CategoryPage";
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
            <Route path="/all-products" component={GoodsFromCategory} />
            <Route path="*" element={<h3>Loading...</h3>} />
            <Redirect from="/" to="/main" />
          </Switch>
          <Footer />
        </div>
      </ApiProvider>
    </Router>
  );
}

export default App;
