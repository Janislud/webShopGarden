import Form from "../Components/Form/Form";
import Categories from "../Components/Categories/Categories";
import Discount from "../Components/Discount/Discount";
import Sales from "../Components/Sales/Sales";
import { useApi } from "../contexts";
import classes from '../Pages/mainPage.module.css'

const Main = () => {
    const { theme } = useApi();

    return <main className={`${classes.main} ${theme === 'light' ? classes.lightTheme : classes.darkTheme}`}>
    <Discount/>
    <Categories/>
    <Form/>
    <Sales/>
    </main>
}

export default Main;