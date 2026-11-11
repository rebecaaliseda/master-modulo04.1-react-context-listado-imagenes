import React from 'react';

import { catsMockData } from './cats.data';
import type { PictureInfo } from '../model/picture-info.model';
import { CartContext } from '../context/cart.context';
import { Link } from 'react-router-dom';

export const CatsPage = () => {
  const [pictures, setPictures] = React.useState<PictureInfo[]>(catsMockData);

  const { selectedPictures, setSelectedPictures } = React.useContext(CartContext);

  React.useEffect(() => {
    setPictures(
      catsMockData.map((picture) => ({
        ...picture,
        selected: selectedPictures.includes(picture.id),
      })),
    );
  }, [selectedPictures]);

  const handleSelectPicture = (pictureId: string) => {
    const updatedPictures = pictures.map((picture) =>
      picture.id === pictureId
        ? {
            ...picture,
            selected: !picture.selected,
          }
        : picture,
    );

    setPictures(updatedPictures);

    const selectedPicture = updatedPictures.find((picture) => picture.id === pictureId);

    if (selectedPicture?.selected) {
      setSelectedPictures([...selectedPictures, pictureId]);
    } else {
      setSelectedPictures(selectedPictures.filter((id) => id !== pictureId));
    }
  };

  return (
    <>
      <nav>
        <Link to="/cats">Cats</Link>
        {' | '}
        <Link to="/dogs">Dogs</Link>
      </nav>

      <h1>Cats</h1>

      <div className="pictures-grid">
        {pictures.map((picture) => (
          <div key={picture.id} className="picture-card">
            <img src={picture.picUrl} alt={picture.title} width="250" />

            <p>{picture.title}</p>

            <input
              type="checkbox"
              checked={picture.selected}
              onChange={() => handleSelectPicture(picture.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};
