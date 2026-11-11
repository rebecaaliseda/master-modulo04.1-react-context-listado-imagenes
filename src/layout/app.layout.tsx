import { ReactNode } from 'react';
import { Cart } from '../cart/cart';

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div className="app-layout">
      <main className="content">{children}</main>

      <aside className="cart-sidebar">
        <Cart />
      </aside>
    </div>
  );
};
