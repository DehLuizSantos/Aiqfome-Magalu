'use client';

import useProductsStore from '@/stores/productStore';

export default function ButtonSeeTicket() {
  const { products } = useProductsStore();
  console.log(products);

  return (
    <>
      {products.length > 0 && (
        <div className='bg-neutrals-100 fixed bottom-[1px] z-4 w-full border-t border-solid border-transparent px-6 py-4'>
          <button className='w-full rounded-[8px] bg-purple-500 px-4 py-3 font-bold text-white'>ver ticket</button>
        </div>
      )}
    </>
  );
}
