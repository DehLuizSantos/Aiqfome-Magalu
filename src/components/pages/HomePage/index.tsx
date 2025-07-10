import Image from 'next/image';

import { SearchInput } from '@/components/atomos/SearchInput';
import OpenedRestaurants from '@/components/organismo/OpenedRestaurants';
import { RestaurantInterface } from '@/interfaces/restaurant';

type HomeProps = {
  restaurants: RestaurantInterface[];
};

export default function Home({ restaurants }: HomeProps) {
  const openedRestaurants = restaurants.filter((restaurant) => restaurant.isOpen);
  return (
    <div>
      <div className='fixed top-[60px] right-0 left-0 z-10 w-full'>
        <SearchInput />
        <div className='container mx-auto mt-0 max-w-[1000px] px-0 sm:mt-2 sm:px-4'>
          <Image
            src='/banner.png'
            alt='Banner'
            width={1600}
            height={600}
            className='h-auto w-full rounded-none sm:rounded-lg'
          />
        </div>
      </div>
      <OpenedRestaurants restaurant={openedRestaurants} />
    </div>
  );
}
