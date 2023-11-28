
import { addtocart, clearcart, removecart } from "../redux/action";
import { useDispatch } from "react-redux";
import './Header.css'
import { productlist } from "../redux/productAction";

function Main() {
  const dispatch = useDispatch();
  const product ={
    name: "infinix",
    type: "mobile",
    colour: "red"
  }

  return (
    <div className="Main">
      <button onClick={() => dispatch(addtocart(product))}>Add to cart</button>
      <button onClick={() => dispatch(removecart(product.name))}>Remove cart</button>
      <button onClick={() => dispatch(clearcart())}>Clear cart</button>
      <button onClick={() => dispatch(productlist())}>product list</button>

    </div>
  );
}

export default Main;
