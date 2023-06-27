import {
  CartItemContainer,
  CartItemImg,
  ItemDetails,
  CartItemName,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={name} />
      <ItemDetails>
        <CartItemName as="span">{name}</CartItemName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
