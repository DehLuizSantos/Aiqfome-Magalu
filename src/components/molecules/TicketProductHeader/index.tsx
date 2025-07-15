'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import PriceControler from '@/components/atomos/PriceControler';
import { formatCurrency } from '@/utils/formats';

type TicketProductHeaderProps = {
  title: string;
  quantity: number;
  basePrice: number;
  restaurantId: string;
  productId: string;
};

export default function TicketProductHeader({
  basePrice,
  quantity,
  title,
  restaurantId,
  productId
}: TicketProductHeaderProps) {
  const [quantityChanger, setQuantity] = useState(quantity);
  return (
    <div className='my-2 w-full px-4'>
      <div className='mb-2 flex items-center justify-between'>
        <h2 className='text-sm font-bold text-neutral-900'>{title}</h2>
        <span className='font-extrabold text-purple-500'>{formatCurrency(basePrice)}</span>
      </div>

      <div className='flex items-center justify-end gap-6'>
        <Link href={`/restaurante/${restaurantId}/${productId}`}>
          <div className='flex gap-1'>
            <Image src={'/icons/pencil.svg'} alt='editar' width={10} height={10} className='h-4 w-4' />
            <span className='text-sm font-bold text-teal-400'>editar</span>
          </div>
        </Link>
        <PriceControler quantity={quantityChanger} setQuantity={setQuantity} />
      </div>
    </div>
  );
}
