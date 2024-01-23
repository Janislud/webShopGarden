import classes from "../Pages/themaContext.module.css";
import { useApi } from "../themaContext";
import { Bucket } from "./../Components/BucketPage/BucketPage";
export const MainBucketPage = () => {
  const { theme } = useApi();
  return (
    <main
      className={`${classes.allSale} ${
        theme === "light" ? classes.lightTheme : classes.darkTheme
      }`}
    >
      <Bucket />
    </main>
  );
};
