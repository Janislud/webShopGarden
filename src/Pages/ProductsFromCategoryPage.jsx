import { ProductsFromCategory } from "../Components/ProductsFromCategory/ProductsFromCategory";
import classes from "../Pages/themaContext.module.css";
import { useApi } from "../themaContext";

export const ProductsFromCategoryPage = () => {
  const { theme } = useApi();
  return (
    <div
      className={`${classes.main} ${
        theme === "light" ? classes.lightTheme : classes.darkTheme
      }`}
    >
      <ProductsFromCategory />
    </div>
  );
};
