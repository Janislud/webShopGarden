import { AllSales } from "../Components/AllSales/AllSales";
import classes from "../Pages/themaContext.module.css";
import { useApi } from "../themaContext";

export const AllSalePage = () => {
  const { theme } = useApi();
  return (
    <div
      className={`${classes.allSale} ${
        theme === "light" ? classes.lightTheme : classes.darkTheme
      }`}
    >
      <AllSales />
    </div>
  );
};
