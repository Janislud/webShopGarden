import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "../GoodsPageCategory/goodsPage.module.css";
export const GoodsPage = () => {
  return (
    <div>
      <div className={classes.CategoryTextWrapper}>
        <button className={classes.categoryBtn}>
          <Link className={classes.categoryBtnDescription} to={"/main"}>
            {"Main Page"}
          </Link>
        </button>

        <div className={classes.line}></div>

        <button className={classes.categoryBtn}>
          <Link className={classes.categoryBtnDescription} to={"/category"}>
            {"Categoris"}
          </Link>
        </button>

        <div className={classes.line}></div>

        <button className={classes.categoryBtn}>
          <Link className={classes.categoryBtnDescription} to={"/goods-page"}>
            {"Tools and equipment"}
          </Link>
        </button>
      </div>

      <div>
        <h2 className={classes.toolsAndEquipmentText}>Tools and equipment</h2>
      </div>
    </div>
  );
};
