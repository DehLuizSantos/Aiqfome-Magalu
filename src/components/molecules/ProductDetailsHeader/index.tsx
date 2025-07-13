import Image from 'next/image';

import { ProductInterface } from '@/interfaces/product';
import { formatCurrency } from '@/utils/formats';

type ProductDetailHeaderInterface = Pick<
  ProductInterface,
  'image' | 'name' | 'price' | 'description' | 'basePrice' | 'hasPromotions'
>;

export default function ProductDetailsHeader({
  image,
  name,
  price,
  description,
  hasPromotions,
  basePrice
}: ProductDetailHeaderInterface) {
  return (
    <div className='w-full'>
      <Image src={image} alt={name} width={390} height={195} className='relative w-full object-cover' />
      <div className='p-4'>
        <h1 className='text-xl font-bold text-neutral-700'>{name}</h1>
        {hasPromotions ? (
          <div className='mt-2 flex items-center gap-2'>
            <span className='font-extrabold text-neutral-500'> de</span>
            <span className='text-sm text-neutral-500 line-through'>{formatCurrency(basePrice)}</span>
            <span className='font-extrabold text-neutral-500'> por</span>
            <span className='text-lg font-extrabold text-purple-700'>{formatCurrency(price)}</span>
          </div>
        ) : (
          <div className='mt-2 flex items-center gap-2'>
            <span className='font-extrabold text-neutral-500'>a partir de</span>
            <span className='text-lg font-extrabold text-purple-700'>{formatCurrency(price)}</span>
          </div>
        )}
        <p className='mt-2 text-sm font-semibold text-neutral-500'>{description}</p>
      </div>
    </div>
  );
}
