import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useApi } from "../../themaContext";
import minus from "../Media/SinglePage-media/minus-icon.svg";
import plus from "../Media/SinglePage-media/plus-icon.svg";
import classes from "./singelProduct.module.css";

const SingleProduct = () => {
  const [categories, setCategories] = useState([]);
  const [isExpanded, setIsExpanded] = useState(true);
  const [number, setNumber] = useState(1);
  const [space, setSpace] = useState(false);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { theme } = useApi();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3333/products/${productId}`
        );
        const data = await response.json();
        console.log(data);
        setCategories(data);
        setProduct(data);
      } catch (error) {
        console.log("Error fetching product details");
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handlePlusClick = () => {
    setNumber((prevAge) => prevAge + 1);
  };

  const handleMinusClick = () => {
    if (number > 0) {
      setNumber((prevAge) => prevAge - 1);
    }
  };

  const switcherText = (event) => {
    console.log("work");
    event.preventDefault();
    setSpace((prevSpace) => !prevSpace);
  };

  const themeClass = theme === "light" ? classes.lightTheme : classes.darkTheme;

  return (
    <div className={classes.CategoryWrapper}>
      <div className={classes.CategoryTextWrapper}>
        <button className={classes.categoryBtn}>
          <Link className={classes.categoryBtnDescription} to="/main">
            {"Main Page"}
          </Link>
        </button>

        <div className={classes.line}></div>

        <button className={classes.categoryBtn}>
          <Link className={classes.categoryBtnDescription} to="/category">
            {"Categoris"}
          </Link>
        </button>
      </div>

      {
        <div className={classes.categoryCardWrapper}>
          {categories.slice(0, 1).map((singleProduct) => (
            <div key={singleProduct.id} className={classes.categoryCard}>
              <img
                className={classes.categoryImg}
                src={`http://localhost:3333${singleProduct.image}`}
                alt={singleProduct.title}
              />
              <div className={classes.singleCardDescription}>
                <h2 className={`${classes.categoryCardText} ${themeClass}`}>
                  {singleProduct.title}
                </h2>
                <div className={classes.PriceDiscountWrapper}>
                  <p
                    className={`${classes.textPriceWithDiscount} ${themeClass}`}
                  >
                    ${singleProduct.discont_price}
                  </p>
                  <p className={classes.textPriceFullPrice}>
                    ${singleProduct.price}
                  </p>
                  <div className={classes.saleBlock}>
                    {singleProduct.price &&
                      singleProduct.discont_price &&
                      `-${Math.round(
                        ((singleProduct.price - singleProduct.discont_price) /
                          singleProduct.price) *
                          100
                      )}%`}
                  </div>
                </div>
                <div className={classes.conculation}>
                  <button
                    className={classes.btnMinus}
                    onClick={handleMinusClick}
                  >
                    <img
                      src={minus}
                      className={classes.btnMinusImg}
                      alt="minus-icon"
                    ></img>
                  </button>
                  <p className={`${classes.canculateCountText} ${themeClass}`}>
                    {number}
                  </p>
                  <button className={classes.btnPlus} onClick={handlePlusClick}>
                    <img
                      src={plus}
                      className={classes.btnPlusImg}
                      alt="plus-icon"
                    />
                  </button>
                  <button className={classes.btnAddToCard}>
                    <p className={classes.btnAddToCardText}>Add to Card</p>
                  </button>
                </div>
                <h3
                  className={`${classes.productTextDescriptionMain} ${themeClass}`}
                >
                  Description
                </h3>
                <p
                  className={`${classes.productTextDescriptionMain} ${
                    space ? "" : classes.clamp
                  } ${themeClass}`}
                >
                  {singleProduct.description}
                </p>
                <button
                  onClick={switcherText}
                  className={`${classes.productTextDescriptionReadMore} ${themeClass}`}
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      }
      <button className={classes.categoryBtnAdaptive}>
        <a className={classes.categoryBtnDescription} href="#">
          {"All Categoris"}
        </a>
      </button>
    </div>
  );
};

export default SingleProduct;
