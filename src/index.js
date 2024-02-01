import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import CategoriesPage from "./Components/CategoryPage/CategoryPage";
import { CategoryDecoration } from "./Components/DecorationPage/DecorationPage";
import SingleProduct from "./Components/SingelProduct/SingelProduct";
import { AllProducts } from "./Pages/AllProducts/AllProducts";
import { AllSales } from "./Pages/AllSales/AllSales";


import { Cart } from "./Pages/CartPage/CartPage";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import Main from "./Pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "", // пустой путь для маршрута по умолчанию
        element: <Main />,
      },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/category",
        element: <CategoriesPage />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/all-sales",
        element: <AllSales />,
      },
      {
        path: "/categories/:categoriesId",
        element: <CategoryDecoration/>,
      },
      {
        path: "/single-product/:productId",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <React.Suspense fallback={<div>Loading...</div>}></React.Suspense>
    </RouterProvider>
  </React.StrictMode>
);
