import './ItemDetail.css';
import React from 'react'; // Asegúrate de importar React si estás usando JSX
import ItemCount from '../ItemCount/ItemCount.jsx';

const Item = ({ id, name, img, price, stock }) => {
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
         <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
      </footer>
    </article>
  );
};

export default Item;
