import Image from 'next/image';

import { ProductInterface } from '@/interfaces/product';
import { formatCurrency } from '@/utils/formats';

type ProductDetailHeaderInterface = Pick<ProductInterface, 'image' | 'name' | 'price' | 'description'>;

export default function ProductDetailsHeader({ image, name, price, description }: ProductDetailHeaderInterface) {
  return (
    <div className='w-full'>
      <Image src={image} alt={name} width={390} height={195} className='w-full object-cover' />
      <div className='mt-4 px-4'>
        <h1 className='text-xl font-bold text-neutral-700'>{name}</h1>
        <div className='mt-2 flex items-center gap-2'>
          <span className='font-extrabold text-neutral-500'>a partir de</span>
          <span className='text-lg font-extrabold text-purple-700'>{formatCurrency(price)}</span>
        </div>
        <p className='mt-2 text-sm font-semibold text-neutral-500'>{description}</p>
      </div>
    </div>
  );
}
