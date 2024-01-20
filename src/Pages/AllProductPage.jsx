import classes from "../Pages/allProductPage.module.css";
import { useApi } from "../contexts";
import { AllProducts } from "./../Components/GoodsPageCategory/AllProducts";

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
