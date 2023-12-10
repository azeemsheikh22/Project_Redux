import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./compunent/Cart";
import Header from "./compunent/Header";
import Main from "./compunent/Main";
import Addtocart from "./compunent/Addtocart";
import Addtocarts from "./compunent/Addtocart";

function App() {
  return (
    <div className="app">
      <Header />
     {/* <Main />
      <Cart/>  */}

      <Routes>
      <Route path="/" element={<Cart/>}></Route>
        <Route path="/addtocart" element={<Addtocarts/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
