import React from "react";
import { Button } from "react-bootstrap";

const CartItems = ({ cartItems, clearCartItems }) => {
  return (
    <div className="row">
      {cartItems.map((item) => (
        <div key={item.id} className="col-12 p-4 border justify-content">
          <div class="d-flex justify-content-start">
            <Button className="m-2" variant="light">
              <p className="desc">{item.desc}</p>
              <img className="" src={item.image} alt="" />
            </Button>
            <div className="m-5 mt-5">
              <span>
                <span className="bold ml-5 p-2">Quantity: {item.value}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
      <div>
        <Button className="m-3" variant="primary">
          Checkout
        </Button>
        <Button className="m-3" variant="secondary" onClick={clearCartItems}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default CartItems;
