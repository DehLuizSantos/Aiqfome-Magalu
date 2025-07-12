import { Suspense } from 'react';

import Image from 'next/image';

import { SearchInput } from '@/components/atomos/SearchInput';
import RestaurantSkeleton from '@/components/molecules/RestaurantSkeleton';
import RestaurantList from '@/components/organismos/RestaurantList';
import { fetchRestaurants } from '@/services/restaurants';

export default async function Page() {
  const restaurants = await fetchRestaurants();

  return (
    <div className='flex min-h-screen flex-col'>
      <div className='bg-white shadow-sm'>
        <SearchInput />
      </div>
      <div className='container mx-auto mt-0 max-w-[1000px] px-0 sm:mt-2 sm:px-4'>
        <Image
          src='/banner.png'
          alt='Banner'
          width={1600}
          height={600}
          loading='lazy'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=='
          className='h-auto w-full rounded-none sm:rounded-lg'
        />
      </div>

      <>
        <RestaurantList restaurantsInitialData={restaurants} />
      </>
    </div>
  );
}
