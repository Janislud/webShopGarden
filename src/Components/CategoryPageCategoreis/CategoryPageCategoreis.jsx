import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useApi } from "../../themaContext";
import classes from "./categoryPageCategories.module.css";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const { theme } = useApi();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3333/categories/all");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log("Error fetching category list");
      }
    };

    fetchCategories();
  }, []);

  const themeClass = theme === "light" ? classes.lightTheme : classes.darkTheme;

  return (
    <div className={`${classes.CategoryWrapper} ${themeClass}`}>
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
        <div className={`${classes.categoryCardWrapper} ${themeClass}`}>
          {categories.slice(0, 5).map((category) => (
            <div key={category.id} className={classes.categoryCard}>
              <img
                className={classes.categoryImg}
                src={`http://localhost:3333${category.image}`}
                alt={category.title}
              />
              <h2 className={`${classes.categoryCardText} ${themeClass}`}>
                {category.title}
              </h2>
            </div>
          ))}
        </div>
      }
      <button className={classes.categoryBtnAdaptive}>
        <Link className={classes.categoryBtnDescription} to={"/category"}>
          {"All Categoris"}
        </Link>
      </button>
    </div>
  );
};

export default CategoriesPage;
