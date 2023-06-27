import { useContext } from "react";

import { CartContext } from "../../contexts/cart-contextx";

import CheckOutItem from "../../components/checkout-item/checkout-item";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((cartItem) => {
            return <CheckOutItem cartItem={cartItem} key={cartItem.id} />;
          })}
          <Total as="span">Total: ${cartTotal} </Total>
        </div>
      ) : (
        <div>
          <h1>Cart is currently empty</h1>
          <p>Better get shopping!</p>
        </div>
      )}
    </CheckoutContainer>
  );
};

export default CheckOut;
