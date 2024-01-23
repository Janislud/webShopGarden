import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AllProductPage } from "./Pages/AllProductPage";
import Categorys from "./Pages/CategoryPage";
import { ErrorPage } from "./Pages/ErrorPage";
import { MainBucketPage } from "./Pages/MainBucketPage";
import Main from "./Pages/MainPage";
import { ProductsFromCategoryPage } from "./Pages/ProductsFromCategoryPage";
import SingleProductPage from "./Pages/SingelProductPage";

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
        element: <Categorys />,
      },
      {
        path: "/all-products",
        element: <AllProductPage />,
      },
      {
        path: "/all-products/decoration",
        element: <ProductsFromCategoryPage />,
      },
      {
        path: "/single-product/:productId",
        element: <SingleProductPage />,
      },
      {
        path: "/bucket",
        element: <MainBucketPage />,
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
