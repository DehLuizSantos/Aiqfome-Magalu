import Image from 'next/image';

import { SearchInput } from '@/components/atomos/SearchInput';
import RestaurantList from '@/components/organismos/RestaurantList';
import { RestaurantInterface } from '@/interfaces/restaurant';

type HomeProps = {
  restaurants: RestaurantInterface[];
};

export default function Home({ restaurants }: HomeProps) {
  const openedRestaurants = restaurants.filter((restaurant) => restaurant.isOpen);
  const closedRestaurants = restaurants.filter((restaurant) => !restaurant.isOpen);
  return (
    <div>
      <div className='fixed top-[60px] right-0 left-0 z-10 w-full md:relative md:top-[0px] md:z-0'>
        <SearchInput />
        <div className='container mx-auto mt-0 max-w-[1000px] px-0 sm:mt-2 sm:h-[100px] sm:px-4'>
          <Image
            src='/banner.png'
            alt='Banner'
            width={1600}
            height={600}
            className='h-auto w-full rounded-none sm:rounded-lg'
          />
        </div>
      </div>
      <RestaurantList restaurants={openedRestaurants} type='open' />
      <RestaurantList restaurants={closedRestaurants} type='closed' />
    </div>
  );
}
