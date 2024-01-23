import { Outlet } from "react-router-dom";
import { Footer } from "./Layout/Footer";
import { Header } from "./Layout/Header";
import { ThemaProvider } from "./themaContext";

const App = () => {
  return (
    <ThemaProvider>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemaProvider>
  );
};

export default App;
