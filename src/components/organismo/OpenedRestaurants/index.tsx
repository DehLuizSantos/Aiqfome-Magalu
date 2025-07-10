import Link from 'next/link';

import { RestaurantCard } from '@/components/molecules/RestaurantCard';
import { RestaurantComponents } from '@/interfaces/restaurant';

export default function OpenedRestaurants({ restaurant }: RestaurantComponents) {
  return (
    <div className='relative top-[194px] h-[100vh] overflow-y-auto scroll-smooth p-4'>
      <h2 className='font-extrabold text-purple-700'>Abertos</h2>
      {restaurant.map((restaurant) => (
        <Link href={`restaurante/${restaurant.id}`} key={restaurant.id}>
          <RestaurantCard {...restaurant} />
        </Link>
      ))}
    </div>
  );
}
