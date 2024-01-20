import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useApi } from "../../contexts";
import classes from "../BucketPage/bucketPage.module.css";
export const Bucket = () => {
  const { theme } = useApi();

  return (
    <div className={classes.CategoryWrapper}>
      <div className={classes.CategoryTextWrapper}>
        <h2
          className={`${classes.categoryDescription} ${
            theme === "light" ? classes.lightTheme : classes.darkTheme
          }`}
        >
          Shopping cart
        </h2>

        <div className={classes.line}></div>

        <button className={classes.categoryBtn}>
          <Link className={classes.categoryBtnDescription} to="/category">
            {"Back to the story"}
          </Link>
        </button>
      </div>
    </div>
  );
};
