import CategoriesPage from "../Components/CategoryPageCategoreis/CategoryPageCategoreis";
import classes from "../Pages/themaContext.module.css";
import { useApi } from "../themaContext";

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
