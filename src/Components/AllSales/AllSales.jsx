import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../AllSales/allSales.module.css";
import { useApi } from "./../../themaContext";
export const AllSales = () => {
  const [sales, setSales] = useState([]);

  const { theme } = useApi();

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await fetch("http://localhost:3333/products/all");
        const data = await response.json();
        setSales(data);
      } catch (error) {
        console.log("Error fetching product list");
      }
    };

    fetchSales();
  }, []);

  const discountedSales = sales.filter((sale) => sale.discont_price !== null);
  const themeClass = theme === "light" ? classes.lightTheme : classes.darkTheme;

  return (
    <div className={classes.salesWrapper}>
      <div className={classes.CategoryTextWrapper}>
        <button className={classes.categoryBtn}>
          <Link className={classes.categoryBtnDescription} to={"/main"}>
            {"Main Page"}
          </Link>
        </button>

        <div className={classes.line}></div>

        <button className={classes.categoryBtn}>
          <Link className={classes.categoryBtnDescription} to={"/all-products"}>
            {"All Products"}
          </Link>
        </button>

        <div className={classes.line}></div>

        <button className={classes.categoryBtn}>
          <Link
            className={classes.categoryBtnDescription}
            to={"/all-products/decoration"}
          >
            {"Decoration"}
          </Link>
        </button>
      </div>

      <div>
        <h2 className={`${classes.toolsAndEquipmentText} ${themeClass}`}>
          All Sales
        </h2>
      </div>

      <div className={classes.inputsWrapper}>
        <div className={classes.inputFromToWrapper}>
          <label
            htmlFor="number"
            className={`${classes.priceLable} ${themeClass}`}
          >
            Price
          </label>
          <input
            className={classes.priceInputFrom}
            type="number"
            placeholder="from"
          />
          <input
            className={classes.priceInputTo}
            type="number"
            placeholder="to"
          />
        </div>
        <div className={classes.discountItemsWrapper}>
          <label
            className={`${classes.discountItemsLable} ${themeClass}`}
            htmlFor="checkbox"
          >
            Discounted items
          </label>
          <input
            id="discountCheckbox"
            className={classes.discountItemsInput}
            type="checkbox"
          />
        </div>

        <div className={classes.sortedWrapper}>
          <label
            className={`${classes.sortedLable} ${themeClass}`}
            htmlFor="sorted"
          >
            Sorted
          </label>
          <select
            className={classes.selectedForOptionWrapper}
            id="sorted"
            type="text"
          >
            <option className={classes.optionParams} value="">
              Ascending
            </option>
            <option className={classes.optionParams} value="">
              Descending
            </option>
          </select>
        </div>
      </div>

      {
        <div className={classes.saleCardWrapper}>
          {discountedSales.slice(0, 10).map((sale) => (
            <Link
              key={sale.id}
              className={classes.saleCard}
              to={`/single-product/${sale.id}`}
            >
              <div className={classes.saleBlock}>
                {sale.price &&
                  sale.discont_price &&
                  `-${Math.round(
                    ((sale.price - sale.discont_price) / sale.price) * 100
                  )}%`}
              </div>
              <img
                className={classes.saleImg}
                src={`http://localhost:3333${sale.image}`}
                alt={sale.title}
              />
              <h2
                className={`${classes.saleCardText} ${
                  theme === "light" ? classes.lightTheme : classes.darkTheme
                }`}
              >
                {sale.title}
              </h2>

              <div className={classes.salePriceWrapper}>
                <p
                  className={`${classes.realPrice} ${
                    theme === "light" ? classes.lightTheme : classes.darkTheme
                  }`}
                >
                  ${sale.discont_price}
                </p>

                {sale.discont_price ? (
                  <p
                    className={`${classes.firstPrice} ${
                      theme === "light"
                        ? classes.saleBasicTheme
                        : classes.redTheme
                    }`}
                  >
                    ${sale.price}
                  </p>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      }
      <button className={classes.saleBtnAdaptive} type="button">
        <a className={classes.categoryBtnDescription} href="#">
          {"All Sales"}
        </a>
      </button>
    </div>
  );
};
