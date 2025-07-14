'use client';

import { useState } from 'react';

import { formatCurrency } from '@/utils/formats';

import PriceControler from '../PriceControler';

type DrinkOptionProps = {
  label: string;
  price: number;
};

export default function DrinkOptions({ label, price }: DrinkOptionProps) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className='mt-4 flex justify-between'>
      <div className='flex items-center gap-2'>
        <PriceControler type='minus' quantity={quantity} setQuantity={setQuantity} />
        <span className='text-sm font-semibold text-neutral-500'>{label}</span>
      </div>
      <h4 className='text-sm font-bold text-purple-500'>+{formatCurrency(price)}</h4>
    </div>
  );
}
