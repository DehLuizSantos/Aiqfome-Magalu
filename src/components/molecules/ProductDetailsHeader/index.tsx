import Image from 'next/image';
import Link from 'next/link';

import { ProductInterface } from '@/interfaces/product';
import { formatCurrency } from '@/utils/formats';

interface ProductDetailsHeaderProps extends ProductInterface {
  restaurantId: string;
}

export default function ProductDetailsHeader({
  image,
  name,
  restaurantId,
  price,
  description,
  hasPromotions,
  basePrice
}: ProductDetailsHeaderProps) {
  return (
    <div className='w-full'>
      <Link href={`/restaurante/${restaurantId}`}>
        <div className='fixed top-[70px] left-[10px] z-10 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-200'>
          <Image src='/icons/chevron_right.svg' alt='voltar' width={10} height={10} className='h-4 w-4 rotate-180' />
        </div>
      </Link>
      <Image src={image} alt={name} width={390} height={195} className='relative w-full object-cover' priority />
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
