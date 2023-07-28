import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="text-center">
        <h2>{greeting}</h2>
      </div>
    </div>
  );
};

export default ItemListContainer;
