import React, { useEffect, useState } from "react";
import { useApi } from "../../contexts";
import classes from "./categoryPageCategories.module.css";

const CategoriesPage = () => {
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
    <div
      className={`${classes.CategoryWrapper} ${
        theme === "light" ? classes.lightTheme : classes.darkTheme
      }`}
    >
      <div className={classes.CategoryTextWrapper}>
        <button className={classes.categoryBtn} onClick={toggleCategories}>
          <a className={classes.categoryBtnDescription} href="#">
            {isExpanded ? "Main Page" : "Main Page"}
          </a>
        </button>

        <div className={classes.line}></div>

        <button className={classes.categoryBtn} onClick={toggleCategories}>
          <a className={classes.categoryBtnDescription} href="#">
            {isExpanded ? "Categoris" : "Categoris"}
          </a>
        </button>
      </div>

      {isExpanded && (
        <div
          className={`${classes.categoryCardWrapper} ${
            theme === "light" ? classes.lightTheme : classes.darkTheme
          }`}
        >
          {categories.slice(0, 5).map((category) => (
            <div key={category.id} className={classes.categoryCard}>
              <img
                className={classes.categoryImg}
                src={`http://localhost:3333${category.image}`}
                alt={category.title}
              />
              <h2
                className={`${classes.categoryCardText} ${
                  theme === "light" ? classes.lightTheme : classes.darkTheme
                }`}
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
        <a className={classes.categoryBtnDescription} href="#">
          {isExpanded ? "All Categoris" : "All Categoris"}
        </a>
      </button>
    </div>
  );
};

export default CategoriesPage;
