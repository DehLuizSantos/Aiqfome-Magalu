import Link from 'next/link';

import { RestaurantCard } from '@/components/molecules/RestaurantCard';
import { RestaurantInterface } from '@/interfaces/restaurant';

type RestaurantListProps = {
  restaurants: RestaurantInterface[];
  type: 'open' | 'closed';
};

export default function RestaurantList({ restaurants, type }: RestaurantListProps) {
  return (
    <div className='max-md relative top-[200px] z-2 h-[100%] overflow-y-auto scroll-smooth bg-white p-4'>
      <h2 className='font-extrabold text-purple-700'>{type === 'open' ? 'Abertos' : 'Fechado'}</h2>
      <div className={`${type === 'closed' && 'pb-[130px]'}`}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            {type === 'open' ? (
              <Link href={`restaurante/${restaurant.id}`}>
                <RestaurantCard
                  restaurant={restaurant}
                  type={restaurant.deliveryFee === 0 ? 'motorcycle' : 'aiqentregaPurple'}
                />
              </Link>
            ) : (
              <RestaurantCard
                restaurant={restaurant}
                type={restaurant.deliveryFee === 0 ? 'motorcycle' : 'aiqentregaPurple'}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
