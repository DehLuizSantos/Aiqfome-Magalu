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
    if (quantity === 0) {
      return;
    }
    const productStringfy = JSON.stringify({
      quantity,
      name,
      id
    });
    localStorage.setItem(id, productStringfy);
  }, [quantity]);
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
