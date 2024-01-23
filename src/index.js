import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Bucket } from "./Components/BucketPage/BucketPage";
import { AllProductPage } from "./Pages/AllProductPage";
import Categorys from "./Pages/CategoryPage";
import { ErrorPage } from "./Pages/ErrorPage";
import Main from "./Pages/MainPage";
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
        path: "/single-product/:productId",
        element: <SingleProductPage />,
      },
      {
        path: "/bucket",
        element: <Bucket />,
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
