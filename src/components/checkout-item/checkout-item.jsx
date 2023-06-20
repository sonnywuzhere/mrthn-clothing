import { useContext } from "react";

import { CartContext } from "../../contexts/cart-contextx";

import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price} </span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;

// {cartItems.map((item, idx) => {
//     const { name, imageUrl, quantity } = item;
//     return (
//       <div key={idx}>
//         <img src={imageUrl} alt={name} />
//         <h2>{name}</h2>
//         <span
//           onClick={() => removeItemFromCart(item)}
//           style={{ fontSize: "50px", cursor: "pointer" }}
//         >
//           -
//         </span>
//         <span>{quantity}</span>
//         <span
//           onClick={() => addItemToCart(item)}
//           style={{ fontSize: "50px", cursor: "pointer" }}
//         >
//           +
//         </span>
//         <button onClick={() => removeItemFromCart(item)}>REMOVE</button>
//       </div>
//     );
//   })}
