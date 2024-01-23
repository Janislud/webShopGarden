import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../../themaContext";
import classes from "./category.module.css";

const Categories = () => {
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
    <div className={classes.CategoryWrapper}>
      <div className={classes.CategoryTextWrapper}>
        <h2 className={`${classes.categoryDescription} ${themeClass}`}>
          Categories
        </h2>

        <div className={classes.line}></div>

        <button className={classes.categoryBtn}>
          <Link className={classes.categoryBtnDescription} to="/category">
            {"All Categoris"}
          </Link>
        </button>
      </div>

      {
        <div className={classes.categoryCardWrapper}>
          {categories.slice(0, 4).map((category) => (
            <Link key={category.id} className={classes.categoryCard} to={"#"}>
              <img
                className={classes.categoryImg}
                src={`http://localhost:3333${category.image}`}
                alt={category.title}
              />
              <h2 className={`${classes.categoryCardText} ${themeClass} `}>
                {category.title}
              </h2>
            </Link>
          ))}
        </div>
      }
      <button className={classes.categoryBtnAdaptive}>
        <Link className={classes.categoryBtnDescription} to="/category">
          {"All Categoris"}
        </Link>
      </button>
    </div>
  );
};

export default Categories;
