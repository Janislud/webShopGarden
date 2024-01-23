import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../../themaContext";
import classes from "../ProductsFromCategory/productsFromCategory.module.css";

export const ProductsFromCategory = () => {
  const [allProduct, setAllProduct] = useState([]);
  const { theme } = useApi();

  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const response = await fetch("http://localhost:3333/products/all");
        const data = await response.json();
        setAllProduct(data);
        console.log(data);
      } catch (error) {}
    };
    fetchAllProduct();
  }, []);

  const gardenProducts = allProduct.filter((sale) => sale.categoryId === 3);

  const themeClass = theme === "light" ? classes.lightTheme : classes.darkTheme;

  return (
    <main className={`${classes.goodsPageWrapper} ${themeClass}`}>
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
            to="/all-products/decoration"
          >
            {"Decoration"}
          </Link>
        </button>
      </div>

      <div>
        <h2 className={`${classes.toolsAndEquipmentText} ${themeClass}`}>
          Decoration
        </h2>
      </div>

      <div className={`${classes.inputsWrapper} ${themeClass}`}>
        <div className={classes.inputFromToWrapper}>
          <label className={`${classes.priceLable} ${themeClass}`} for="number">
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
            htmlFor="discountCheckbox"
            for="checkbox"
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
        {gardenProducts.slice(0, 7).map((sale) => (
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
    </main>
  );
};
