import { useContext } from "react";

import { CartContext } from "../../contexts/cart-contextx";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCardContainer,
  ProductCardName,
  ProductCardFooter,
  ProductCardPrice,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <ProductCardName as="span">{name}</ProductCardName>
        <ProductCardPrice as="span">{price}</ProductCardPrice>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
