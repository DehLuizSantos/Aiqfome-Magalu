'use client';

import Image from 'next/image';

import useRestaurantsStore from '@/stores/restaurantStore';

export function SearchInput() {
  const { setRestaurants } = useRestaurantsStore();
  return (
    <div className='bg-purple-700 px-4 pt-2 pb-4'>
      <div className='container mx-auto max-w-[1000px]'>
        <div className='relative'>
          <Image
            src={'/icons/search.svg'}
            alt='search'
            width={16}
            height={16}
            className='text-gray-icons absolute top-1/2 left-3 -translate-y-1/2'
          />
          <input
            type='text'
            placeholder='busque pela loja ou culinária'
            className='text-text-light placeholder:text-gray-icons w-full rounded-md bg-white py-2 pl-10 text-sm shadow-sm'
            onChange={(e) => setRestaurants(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
