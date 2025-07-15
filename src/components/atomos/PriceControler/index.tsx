import { Dispatch, SetStateAction } from 'react';

import Image from 'next/image';

type PriceControler = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  type?: 'trash' | 'minus';
};

export default function PriceControler({ quantity, setQuantity, type = 'trash' }: PriceControler) {
  return (
    <div className='flex items-center justify-between gap-4'>
      <button disabled={quantity === 0} onClick={() => setQuantity((e) => e - 1)}>
        <Image src={`/icons/${type}.svg`} alt={'deletar item'} width={22} height={22} className='h-5 w-5' />
      </button>
      <span className='font-bold text-neutral-700'>{quantity}</span>
      <button onClick={() => setQuantity((e) => e + 1)}>
        <Image src='/icons/add-plus.svg' alt={'adicionar item'} width={32} height={32} className='h-5 w-5' />
      </button>
    </div>
  );
}
