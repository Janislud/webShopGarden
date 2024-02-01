import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { NavLink } from "react-router-dom";
import { useApi } from "../../themaContext";
import bucketLogoWhite from "../Media/Header-media/bucket-icon-white.svg";
import bucketLogo from "../Media/Header-media/bucket-icon.svg";
import gardenLogo from "../Media/Header-media/garden-shop-logo.svg";
import moon from "../Media/Header-media/moon-icon.png";
import sun from "../Media/Header-media/sun-white.png";
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

  const themeClass = theme === "light" ? classes.lightTheme : classes.darkTheme;

  return (
    <header className={`${classes.header} ${themeClass}`}>
      <div className={`${classes.navigationWrapper} ${themeClass}`}>
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
            <li className={`${classes.headerText}`}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? `${classes.pending} ${themeClass}`
                    : isActive
                    ? `${classes.active} ${themeClass}`
                    : `${themeClass}`
                }
                to="/main"
              >
                Main Page
              </NavLink>
            </li>
            <li className={`${classes.headerText}`}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? `${classes.pending} ${themeClass}`
                    : isActive
                    ? `${classes.active} ${themeClass}`
                    : `${themeClass}`
                }
                to="/category"
              >
                Category
              </NavLink>
            </li>
            <li className={`${classes.headerText}`}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? `${classes.pending} ${themeClass}`
                    : isActive
                    ? `${classes.active} ${themeClass}`
                    : `${themeClass}`
                }
                to="/all-products"
              >
                All Products
              </NavLink>
            </li>
            <li className={`${classes.headerText}`}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? `${classes.pending} ${themeClass}`
                    : isActive
                    ? `${classes.active} ${themeClass}`
                    : `${themeClass}`
                }
                to="/all-sales"
              >
                All Sales
              </NavLink>
            </li>
          </ul>

          <button
            onClick={toggleThemeSwitch}
            className={`${classes.themeSwitcherLight} ${themeClass}`}
          >
            {theme === "light" ? (
              <img className={classes.moonIcon} src={moon} alt="Light Theme" />
            ) : (
              <img className={classes.sunIcon} src={sun} alt="Dark Theme" />
            )}
          </button>
        </nav>
        <NavLink className={`${classes.bucket} ${themeClass}`} to="/cart">
          <img
            className={`${classes.bucketLogo} ${themeClass}`}
            src={theme === "light" ? bucketLogo : bucketLogoWhite}
            alt=""
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
