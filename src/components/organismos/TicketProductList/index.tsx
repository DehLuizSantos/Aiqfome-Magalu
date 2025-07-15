'use client';

import TicketProductCustomizations from '@/components/molecules/TicketProductCustumizations';
import TicketProductHeader from '@/components/molecules/TicketProductHeader';
import { ProductTicketInterface } from '@/interfaces/ticket';

type TicketProductListProps = {
  id: string;
};

export default function TicketProductList({ id }: TicketProductListProps) {
  const productsLocal = sessionStorage.getItem('produtos');
  const products: ProductTicketInterface[] = JSON.parse(productsLocal!);

  return (
    <div className=''>
      {products.map((product) => (
        <TicketProductHeader
          key={product.id}
          basePrice={product.price}
          quantity={product.quantity}
          title={product.name}
          productId={product.id}
          restaurantId={id}
        />
      ))}
      {products.map((product, index) => (
        <TicketProductCustomizations customization={product.customization!} key={index} />
      ))}
    </div>
  );
}
