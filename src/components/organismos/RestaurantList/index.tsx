import Link from 'next/link';

import { RestaurantCard } from '@/components/molecules/RestaurantCard';
import { RestaurantInterface } from '@/interfaces/restaurant';

type RestaurantListProps = {
  restaurants: RestaurantInterface[];
};

export default function RestaurantList({ restaurants }: RestaurantListProps) {
  const opened = restaurants.filter((restaurant) => restaurant.isOpen);
  const closed = restaurants.filter((restaurant) => !restaurant.isOpen);
  return (
    <div className='max-md z-2 h-[100%] overflow-y-auto scroll-smooth bg-white p-4'>
      <h2 className='font-extrabold text-purple-700'>Aberto</h2>
      <div>
        {opened.map((restaurant) => (
          <div key={restaurant.id}>
            <Link href={`restaurante/${restaurant.id}`}>
              <RestaurantCard
                restaurant={restaurant}
                type={restaurant.deliveryFee === 0 ? 'motorcycle' : 'aiqentregaPurple'}
              />
            </Link>
          </div>
        ))}
        <h2 className='mt-[12px] font-extrabold text-purple-700'>fechado</h2>

        <div className='pb-[200px]'>
          {closed.map((restaurant) => (
            <RestaurantCard
              restaurant={restaurant}
              key={restaurant.id}
              type={restaurant.deliveryFee === 0 ? 'motorcycle' : 'aiqentregaPurple'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
