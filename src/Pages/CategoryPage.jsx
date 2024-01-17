import CategoriesPage from "../Components/CategoryPageCategoreis/CategoryPageCategoreis";
import { useApi } from "../contexts";
import classes from "../Pages/categoryPage.module.css";

const Categorys = () => {
  const { theme } = useApi();
  return (
    <main
      className={theme === "light" ? classes.lightThema : classes.darkTheme}
    >
      <CategoriesPage />
    </main>
  );
};

export default Categorys;
