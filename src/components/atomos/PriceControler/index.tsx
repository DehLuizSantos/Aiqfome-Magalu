import { Dispatch, SetStateAction } from 'react';

import Image from 'next/image';

type PriceControler = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

export default function PriceControler({ quantity, setQuantity }: PriceControler) {
  return (
    <div className='flex items-center justify-between gap-6'>
      <button onClick={() => setQuantity((e) => e - 1)}>
        <Image src='/icons/trash.svg' alt={'deletar item'} width={22} height={22} />
      </button>
      {quantity}
      <button onClick={() => setQuantity((e) => e + 1)}>
        <Image src='/icons/add-plus.svg' alt={'adicionar item'} width={32} height={32} />
      </button>
    </div>
  );
}
