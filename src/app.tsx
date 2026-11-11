import { Routes, Route } from 'react-router-dom';

import { CatsPage } from './cats/cats.page';
import { DogsPage } from './dogs/dogs.page';

import { CartProvider } from './context/cart.context';

import { AppLayout } from './layout/app.layout';

export const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route
          path="/cats"
          element={
            <AppLayout>
              <CatsPage />
            </AppLayout>
          }
        />

        <Route
          path="/dogs"
          element={
            <AppLayout>
              <DogsPage />
            </AppLayout>
          }
        />
      </Routes>
    </CartProvider>
  );
};
