import { Link } from "react-router-dom";
import { useApi } from "../../themaContext";
import classes from "../CartPage/cartPage.module.css";
export const Cart = () => {
  const { theme } = useApi();

  const themeClass = theme === "light" ? classes.lightTheme : classes.darkTheme;

  return (
    <div className={`${classes.CategoryWrapper} ${themeClass}`}>
      <div className={classes.CategoryTextWrapper}>
        <h2 className={`${classes.categoryDescription} ${themeClass}`}>
          Shopping cart
        </h2>

        <div className={classes.line}></div>

        <button className={classes.categoryBtn}>
          <Link className={classes.categoryBtnDescription} to="/category">
            {"Back to the story"}
          </Link>
        </button>
      </div>

      <div className={classes.shoppingCardWrapper}>
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
    </div>
  );
};
