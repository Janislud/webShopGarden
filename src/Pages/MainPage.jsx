import Categories from "../Components/Categories/Categories";
import Discount from "../Components/Discount/Discount";
import Form from "../Components/Form/Form";
import Sales from "../Components/Sales/Sales";
import classes from "../Pages/themaContext.module.css";
import { useApi } from "../themaContext";

const Main = () => {
  const { theme } = useApi();

  return (
    <main
      className={`${classes.main} ${
        theme === "light" ? classes.lightTheme : classes.darkTheme
      }`}
    >
      <Discount />
      <Categories />
      <Form />
      <Sales />
    </main>
  );
};

export default Main;
