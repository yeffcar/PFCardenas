import './ItemDetail.css';
import React, { useContext, useState } from 'react'; // Asegúrate de importar React y useState
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const Item = ({ id, name, img, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0); // Estado para guardar la cantidad de items

  const { addItem } = useContext(CartContext)

  const handleAddToCart = (quantity) => {
    setQuantityAdded(quantity)

    const item = {

        id, name, price

    }

    addItem(item, quantity)
    
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Stock disponible: {stock}</p>
      </section>
      <footer className='ItemFooter'>
        {

          quantityAdded > 0 ? (

            <Link to='/cart' className='Button'>Terminar Compra</Link>
         
         ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleAddToCart} />
         )
        }
      </footer>
    </article>
  );
};

export default Item;
