import classes from "./discount.module.css";

const Discount = () => {
  return (
    <div className={classes.backgrounImg}>
      <h1 className={classes.discountDescription}>
        Amazing Discounts on Garden Products!
      </h1>
      <div className={classes.discountBtnWrapper}>
        <button className={classes.discountBtn}>
          <a href="#">Check out</a>
        </button>
      </div>
    </div>
  );
};

export default Discount;
