import { useContext } from "react";

import { CartContext } from "../../contexts/cart-contextx";

import CheckOutItem from "../../components/checkout-item/checkout-item";

import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((cartItem) => {
            return <CheckOutItem cartItem={cartItem} key={cartItem.id} />;
          })}
          <span className="total">Total: ${cartTotal} </span>
        </div>
      ) : (
        <div>
          <h1>Cart is currently empty</h1>
          <p>Better get shopping!</p>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
