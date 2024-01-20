import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useApi } from "../../contexts";
import bucketLogoWhite from "../Media/Header-media/bucket-icon-white.svg";
import bucketLogo from "../Media/Header-media/bucket-icon.svg";
import gardenLogo from "../Media/Header-media/garden-shop-logo.svg";
import classes from "./navbar.module.css";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const { theme, toggleTheme } = useApi();

  const toggleNavigation = () => {
    setNavigation(!navigation);
  };

  const toggleThemeSwitch = () => {
    toggleTheme();
    console.log("Theme switched:", theme);
  };

  return (
    <header
      className={`${classes.header} ${
        theme === "light" ? classes.lightTheme : classes.darkTheme
      }`}
    >
      <div
        className={`${classes.navigationWrapper} ${
          theme === "light" ? classes.lightTheme : classes.darkTheme
        }`}
      >
        <a href="#">
          <img className={classes.gardenLogo} src={gardenLogo} alt="" />
        </a>
        <div
          onClick={() => toggleNavigation(!navigation)}
          className={classes.mobileBtm}
        >
          {!navigation ? <AiOutlineMenu size={25} /> : " "}
        </div>
        <nav className={classes.mainNavigation}>
          <ul
            className={
              navigation
                ? [classes.mainNavigationList, classes.active].join(" ")
                : [classes.mainNavigationList]
            }
          >
            <div
              onClick={() => toggleNavigation(!navigation)}
              className={classes.mobileBtmSec}
            >
              <AiOutlineClose size={25} />
            </div>
            <li className={classes.list}>
              <Link
                className={`${classes.headerText} ${
                  theme === "light" ? classes.lightTheme : classes.darkTheme
                } `}
                to="/main"
              >
                Main Page
              </Link>
            </li>
            <li>
              <Link
                className={`${classes.headerText} ${
                  theme === "light" ? classes.lightTheme : classes.darkTheme
                }`}
                to="/category"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                className={`${classes.headerText} ${
                  theme === "light" ? classes.lightTheme : classes.darkTheme
                }`}
                to="/all-products"
              >
                All products
              </Link>
            </li>
            <li>
              <Link
                className={`${classes.headerText} ${
                  theme === "light" ? classes.lightTheme : classes.darkTheme
                }`}
                to="/all-sales"
              >
                All sales
              </Link>
            </li>
          </ul>

          <button
            onClick={toggleThemeSwitch}
            className={classes.themeSwitcherLight}
          >
            {theme === "light" ? "Light Theme" : "Dark Theme"}
          </button>
        </nav>
        <Link
          className={`${classes.bucket} ${
            theme === "light" ? classes.lightTheme : classes.darkTheme
          }`}
          to="/bucket"
        >
          <img
            className={`${classes.bucketLogo} ${
              theme === "light" ? classes.lightTheme : classes.darkTheme
            }`}
            src={theme === "light" ? bucketLogo : bucketLogoWhite}
            alt=""
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
