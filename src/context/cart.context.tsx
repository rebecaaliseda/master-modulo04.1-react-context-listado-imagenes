import React from 'react';

interface CartContextModel {
  selectedPictures: string[];
  setSelectedPictures: (pictures: string[]) => void;
}

export const CartContext = React.createContext<CartContextModel>({
  selectedPictures: [],
  setSelectedPictures: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [selectedPictures, setSelectedPictures] = React.useState<string[]>([]);

  return (
    <CartContext.Provider
      value={{
        selectedPictures,
        setSelectedPictures,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
