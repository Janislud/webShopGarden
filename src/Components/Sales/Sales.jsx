import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useApi } from "../../contexts";
import classes from "../Sales/sales.module.css";

const Sales = () => {
  const [sales, setSales] = useState([]);

  const { theme } = useApi();

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await fetch("http://localhost:3333/products/all");
        const data = await response.json();
        console.log(data);
        setSales(data);
      } catch (error) {
        console.log("Error fetching product list");
      }
    };

    fetchSales();
  }, []);

  const discountedSales = sales.filter((sale) => sale.discont_price !== null);

  return (
    <div className={classes.salesWrapper}>
      <div className={classes.salesTextWrapper}>
        <h2
          className={`${classes.saleText} ${
            theme === "light" ? classes.lightTheme : classes.darkTheme
          }`}
        >
          Sale
        </h2>
        <div className={classes.salesLine}></div>
        <button className={classes.saleBtn} type="button">
          <a className={classes.categoryBtnDescription} href="#">
            {"All Sales"}
          </a>
        </button>
      </div>

      {
        <div className={classes.saleCardWrapper}>
          {discountedSales.slice(0, 4).map((sale) => (
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

export default Sales;
