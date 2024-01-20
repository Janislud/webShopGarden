import { AllProducts } from "../Components/AllProducts/AllProducts";
import classes from "../Pages/allProductPage.module.css";
import { useApi } from "../contexts";

export const GoodsFromCategory = () => {
  const { theme } = useApi();
  return (
    <main
      className={`${classes.main} ${
        theme === "light" ? classes.lightTheme : classes.darkTheme
      }`}
    >
      <AllProducts />
    </main>
  );
};
