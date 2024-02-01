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
    

      <div className={classes.saleCardWrapper}>
        {sales.slice(0, 12).map((sale) => (
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
