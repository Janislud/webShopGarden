import { Outlet } from "react-router-dom";
import { ProductsFromCategory } from "../Components/ProductsFromCategory/ProductsFromCategory";

export const ProductsFromCategoryPage = () => {
  return (
    <div>
      <ProductsFromCategory />
      <Outlet />
    </div>
  );
};
