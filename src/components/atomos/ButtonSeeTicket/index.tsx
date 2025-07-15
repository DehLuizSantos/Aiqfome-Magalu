'use client';

import Link from 'next/link';

import useProductsStore from '@/stores/productStore';

type ButtonSeeTicketProps = {
  id: string;
};

export default function ButtonSeeTicket({ id }: ButtonSeeTicketProps) {
  const { products } = useProductsStore();

  return (
    <>
      {products.length > 0 && (
        <div className='bg-neutrals-100 fixed bottom-[1px] z-4 w-full border-t border-solid border-transparent px-6 py-4'>
          <Link href={`/ticket/${id}`}>
            <button className='w-full rounded-[8px] bg-purple-500 px-4 py-3 font-bold text-white'>ver ticket</button>
          </Link>
        </div>
      )}
    </>
  );
}
