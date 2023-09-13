import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
