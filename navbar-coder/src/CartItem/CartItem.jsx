import React from 'react';

const CartItem = ({ id, name, price, quantity }) => {
  return (
    <div className="CartItem">
      <div className="CartItemDetails">
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
      </div>
      <button className="RemoveButton">Eliminar</button>
    </div>
  );
}

export default CartItem;