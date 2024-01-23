import SingleProduct from "../Components/SingelProduct/SingelProduct";
import classes from "../Pages/themaContext.module.css";
import { useApi } from "../themaContext";

const SingleProductPage = () => {
  const { theme } = useApi();
  return (
    <div
      className={`${classes.main} ${
        theme === "light" ? classes.lightTheme : classes.darkTheme
      }`}
    >
      <SingleProduct />
    </div>
  );
};

export default SingleProductPage;
