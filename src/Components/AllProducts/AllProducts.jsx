import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../../themaContext";
import classes from "../AllProducts/allProducts.module.css";

export const AllProducts = () => {
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

  const themeClass = theme === "light" ? classes.lightTheme : classes.darkTheme;

  return (
    <div className={`${classes.goodsPageWrapper} ${themeClass}`}>
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
          All Products
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

      <div className={classes.saleCardWrapper}>
        {sales.slice(0, 12).map((sale) => (
          <Link
            key={sale.id}
            className={classes.saleCard}
            to={`/all-products/${sale.id}`}
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
            <h2 className={`${classes.saleCardText} ${themeClass}`}>
              {sale.title}
            </h2>

            <div className={classes.salePriceWrapper}>
              <p className={`${classes.realPrice} ${themeClass}`}>
                {sale.discont_price !== null ? `$${sale.discont_price}` : ""}
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
              ) : sale.price !== null ? (
                <p
                  className={`${
                    sale.price ? classes.realPriceWithOutAnyDiscount : ""
                  } ${themeClass}
                  `}
                >
                  ${sale.price}
                </p>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
