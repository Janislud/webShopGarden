import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useApi } from "../../contexts";
import classes from "./category.module.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isExpanded, setIsExpanded] = useState(true);
  const { theme } = useApi();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3333/categories/all");
        const data = await response.json();
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.log("Error fetching category list");
      }
    };

    fetchCategories();
  }, []);

  const toggleCategories = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={classes.CategoryWrapper}>
      <div className={classes.CategoryTextWrapper}>
        <h2
          className={`${classes.categoryDescription} ${
            theme === "light" ? classes.lightTheme : classes.darkTheme
          }`}
        >
          Categories
        </h2>

        <div className={classes.line}></div>

        <button className={classes.categoryBtn}>
          <Link className={classes.categoryBtnDescription} to="/category">
            {isExpanded ? "All Categoris" : "All Categoris"}
          </Link>
        </button>
      </div>

      {isExpanded && (
        <div className={classes.categoryCardWrapper}>
          {categories.slice(0, 4).map((category) => (
            <div key={category.id} className={classes.categoryCard}>
              <img
                className={classes.categoryImg}
                src={`http://localhost:3333${category.image}`}
                alt={category.title}
              />
              <h2
                className={`${classes.categoryCardText} ${
                  theme === "light" ? classes.lightTheme : classes.darkTheme
                } `}
              >
                {category.title}
              </h2>
            </div>
          ))}
        </div>
      )}
      <button
        className={classes.categoryBtnAdaptive}
        onClick={toggleCategories}
      >
        <Link className={classes.categoryBtnDescription} to="/category">
          {isExpanded ? "All Categoris" : "All Categoris"}
        </Link>
      </button>
    </div>
  );
};

export default Categories;
