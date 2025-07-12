'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces/product';
// import { RestaurantTitle } from './RestaurantTitle';
import { formatCurrency } from '@/utils/formats';

interface RestaurantProductCardProps {
  product: Product;
  id: string;
}

export function RestaurantProductCard({ product, id }: RestaurantProductCardProps) {
  console.log(product.id);
  return (
    <Link
      href={`/restaurante/${id}/${product.id}`}
      className='flex items-center justify-between gap-6 rounded-lg py-2 pl-2 transition-colors hover:bg-neutral-100'>
      <div className='flex flex-1 flex-col'>
        <div className='flex items-center gap-1'>
          <h3 className='text-sm font-semibold text-neutral-900'>{product.name}</h3>
          {product.type && (
            <Image
              src={`/icons/${product.type}.svg`}
              alt={product.type ? product.type : product.name}
              width={16}
              height={16}
              className='h-5 w-5'
            />
          )}
        </div>
        <p className='mt-1 text-xs text-neutral-500'>{product.description}</p>
      </div>

      <div className='flex w-24 flex-col items-end'>
        {product.multiplePrices && <span className='text-xs font-bold text-neutral-500'>a partir de</span>}
        {product.hasPromotions && product.basePrice && (
          <span className='mt-0.5 text-xs font-bold text-neutral-500 line-through'>
            {formatCurrency(product.basePrice)}
          </span>
        )}
        <span
          className={`flex items-center gap-1 text-sm font-bold ${
            product.hasPromotions ? 'mt-0.5 text-green-500' : 'mt-1 text-purple-700'
          }`}>
          {product.hasPromotions && (
            <Image
              src={`/icons/circle-dollar.svg`}
              alt={'Item promocional'}
              width={16}
              height={16}
              className='h-4 w-4'
            />
          )}
          <span>{formatCurrency(product.price)}</span>
        </span>
      </div>
    </Link>
  );
}
