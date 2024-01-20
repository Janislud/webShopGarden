import { Link } from "react-router-dom/cjs/react-router-dom.min";
import errorPage from "../Components/Media/ErrorPage-media/error-img.svg";
import classes from "../Pages/errorPage.module.css";
import { useApi } from "../contexts";
export const ErrorPage = () => {
  const { theme } = useApi();
  return (
    <div
      className={`${classes.errorPageWrapper} ${
        theme === "light" ? classes.lightTheme : classes.darkTheme
      }`}
    >
      <div className={classes.imgWithTextWrap}>
        <img className={classes.erroImg} src={errorPage} alt="page-not-found" />
        <h2
          className={`${classes.errorPageText} ${
            theme === "light" ? classes.lightTheme : classes.darkTheme
          }`}
        >
          Page Not Found
        </h2>
        <p
          className={`${classes.errorText} ${
            theme === "light" ? classes.lightTheme : classes.darkTheme
          }`}
        >
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </p>
        <button className={classes.btnGoHome}>
          <Link className={classes.linkClear} to="/main">
            <p className={classes.btnText} to="/main">
              Go Home
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
};
