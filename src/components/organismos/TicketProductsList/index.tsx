'use client';

import TicketProductList from '@/components/molecules/TicketProductList';
import { ProductTicketInterface } from '@/interfaces/ticket';

type TicketProductListProps = {
  id: string;
};

export default function TicketProductsList({ id }: TicketProductListProps) {
  const productsLocal = sessionStorage.getItem('produtos');
  const products: ProductTicketInterface[] = JSON.parse(productsLocal!);
  return (
    <div className=''>
      {products.map((product) => (
        <TicketProductList
          key={product.id}
          basePrice={product.price}
          quantity={product.quantity}
          title={product.name}
          productId={product.id}
          restaurantId={id}
          customization={product.customization!}
        />
      ))}
    </div>
  );
}
