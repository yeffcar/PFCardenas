import './Itemlist.css'; // Asumiendo que la extensión correcta es .css
import Item from '../Item/Item';
import React from 'react';

const Itemlist = ({ products }) => {
  return (
    <div className='ListGroup'>
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default Itemlist;
