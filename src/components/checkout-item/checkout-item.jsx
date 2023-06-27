import { useContext } from "react";

import { CartContext } from "../../contexts/cart-contextx";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  RemoveButton,
  Name,
  Quantity,
  Arrow,
  Value,
  Price,
} from "./checkout-item.styles";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name as="span"> {name} </Name>
      <Quantity as="span">
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value as="span">{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price as="span"> {price} </Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
