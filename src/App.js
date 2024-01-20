import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SingleProduct from "./Components/SingelProduct/SingelProduct";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import { GoodsFromCategory } from "./Pages/AllProductPage";
import Categorys from "./Pages/CategoryPage";
import { ErrorPage } from "./Pages/ErrorPage";
import { MainBucketPage } from "./Pages/MainBucketPage";
import Main from "./Pages/MainPage";
import { ProductsFromCategoryPage } from "./Pages/ProductsFromCategoryPage";
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
            <Route path="/all-sales" component={ErrorPage} />
            <Route path="/bucket" component={MainBucketPage} />
            <Route path="*" element={<h3>Loading...</h3>} />
          </Switch>

          <ProductsFromCategoryPage />

          <Footer />
        </div>
      </ApiProvider>
    </Router>
  );
}

export default App;
