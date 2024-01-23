import classes from "../Pages/themaContext.module.css";
import { ErrorPage } from "./ErrorPage";

export const AllSalePage = () => {
  const { theme } = useApi();
  return (
    <div
      className={`${classes.allSale} ${
        theme === "light" ? classes.lightTheme : classes.darkTheme
      }`}
    >
      <ErrorPage />
    </div>
  );
};
