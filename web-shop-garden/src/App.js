import Categories from "./Components/Categories/Categories";
import Discount from "./Components/Discount/Discount";
import Form from "./Components/Form/Form";
import Header from "./Loyout/Header";



function App() {
  return (
    <div className="App">
    <Header/>
    <Discount/>
    <Categories/>
    <Form/>
    </div>
  );
}

export default App;
