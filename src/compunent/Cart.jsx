import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addtocart, removecart } from "../redux/action";
import { productlist } from "../redux/productAction";

const Cart = () => {
  const result = useSelector((state) => state.producttlists);
  console.log("sadasd",result)
  useEffect(() =>{
    dispatch(productlist())
  },[])


  const dispatch = useDispatch()

  return (
    <div>
      <div className="container">
        <div className="row">
          {result.map((item) => {
           return <>
              <div className="col" key={item._id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={`http://localhost:5000/img/`+ item.file} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                    {item.price}
                    </p>
                    <a href="#" class="btn btn-primary" onClick={() => dispatch(addtocart(item))}>
                      Add to cart
                    </a>
                    <a href="#" class="btn btn-primary ms-3" onClick={() => dispatch(removecart(item._id))}>
                      remove cart
                    </a>
                  </div>
                </div>
              </div>
            </>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
