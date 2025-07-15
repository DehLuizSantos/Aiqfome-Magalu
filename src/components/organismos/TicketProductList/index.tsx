'use client';

import useProductsStore from '@/stores/productStore';

export default function TicketProductList() {
  const { products } = useProductsStore();
  console.log(products);
  return (
    <div className='p-4'>
      <h2>aqui</h2>
    </div>
  );
}
