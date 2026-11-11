import React from 'react';

import { CartContext } from '../context/cart.context';

export const Cart = () => {
  const { selectedPictures, setSelectedPictures } = React.useContext(CartContext);

  const pictureNames: Record<string, string> = {
    'cat-1': 'Cat sleeping',
    'cat-2': 'Cat playing',
    'cat-3': 'Cat looking',

    'dog-1': 'Dog running',
    'dog-2': 'Dog sitting',
    'dog-3': 'Dog playing',
  };

  const handleRemovePicture = (pictureId: string) => {
    setSelectedPictures(selectedPictures.filter((id) => id !== pictureId));
  };

  const handleClearCart = () => {
    setSelectedPictures([]);
  };

  return (
    <>
      <h2>🛒 Carrito</h2>

      {selectedPictures.length === 0 ? (
        <p>No hay imágenes seleccionadas</p>
      ) : (
        <>
          <ul>
            {selectedPictures.map((id) => (
              <li key={id}>
                {pictureNames[id]}

                <button className="delete-button" onClick={() => handleRemovePicture(id)}>
                  🗑️
                </button>
              </li>
            ))}
          </ul>

          <button className="clear-cart-button" onClick={handleClearCart}>
            🗑️ Vaciar carrito
          </button>
        </>
      )}
    </>
  );
};
