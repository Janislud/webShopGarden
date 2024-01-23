import { AllProducts } from "../Components/AllProducts/AllProducts";
import classes from "../Pages/themaContext.module.css";
import { useApi } from "../themaContext";

export const AllProductPage = () => {
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
