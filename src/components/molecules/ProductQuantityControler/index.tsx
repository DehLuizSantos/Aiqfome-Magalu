'use client';

import { useEffect, useState } from 'react';

import PriceControler from '@/components/atomos/PriceControler';
import { ProductInterface } from '@/interfaces/product';
import { formatCurrency } from '@/utils/formats';

type ProductQuantityControlerProps = Pick<ProductInterface, 'price' | 'name' | 'id'>;

export default function ProductQuantityControler({ price, name, id }: ProductQuantityControlerProps) {
  const [quantity, setQuantity] = useState(0);
  const priceControler = quantity * price;

  useEffect(() => {
    const productAlredyRegister = localStorage.getItem('produtos');
    const existingProducts = productAlredyRegister ? JSON.parse(productAlredyRegister) : [];

    if (quantity === 0) {
      // Remove o produto se a quantidade for 0
      const updatedProducts = existingProducts.filter((p: any) => p.id !== id);
      localStorage.setItem('produtos', JSON.stringify(updatedProducts));
      return;
    }

    // Atualiza ou adiciona o produto
    const productIndex = existingProducts.findIndex((p: any) => p.id === id);

    if (productIndex >= 0) {
      existingProducts[productIndex].quantity = quantity;
    } else {
      existingProducts.push({
        quantity,
        name,
        id,
        price
      });
    }

    localStorage.setItem('produtos', JSON.stringify(existingProducts));
  }, [quantity, id, name, price]);

  return (
    <div className='flex items-center justify-between bg-white p-4'>
      <div className='block'>
        <h4 className='font-bold text-neutral-700'>quantos</h4>
        <span className='text-sm font-semibold text-neutral-500'>total </span>
        <span className='text-sm font-bold text-neutral-700'>
          {quantity === 0 ? formatCurrency(price) : formatCurrency(priceControler)}
        </span>
      </div>
      {quantity === 0 ? (
        <button
          onClick={() => setQuantity((e) => e + 1)}
          className='h-[40px] w-[108px] rounded-lg bg-neutral-500 text-white'>
          adicionar
        </button>
      ) : (
        <PriceControler quantity={quantity} setQuantity={setQuantity} />
      )}
    </div>
  );
}
