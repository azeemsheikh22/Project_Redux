import React from "react";
import { useSelector } from "react-redux";

const Addtocarts = () => {
  const result = useSelector((stage) => stage.cartdata);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div className="container">
        <h1>Add to cart</h1>
        <div className="row mt-5">
          <div className="col">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">S/no</th>
                  <th scope="col">Product</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {result.map((item, index) => {
                return  <>
                    <tr>
                      <th scope="row"> {index+1} </th>
                      <td><img src={`http://localhost:5000/img/`+ item.file} style={{height: "70px"}}></img></td>
                      <td>{item.title}</td>
                      <td>@mdo</td>
                    </tr>
                  </>;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtocarts;
