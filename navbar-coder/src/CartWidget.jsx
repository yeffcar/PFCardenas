import React from 'react';
import { Button } from 'react-bootstrap';

const CartButton = ({ itemCount }) => {
  return (
    <Button variant="primary" className="position-relative">
      Carrito <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{itemCount}</span>
    </Button>
  );
};

export default CartButton;
