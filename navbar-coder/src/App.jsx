import React from 'react';
import NavBar from '../src/NavBar.jsx';
import ItemListContainer from '../src/ItemListContainer.jsx';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Hola desde ItemListContainer!" />
    </div>
  );
};

export default App;
