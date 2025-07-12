'use client';

import { useMemo } from 'react';

import Link from 'next/link';

import { AnimatedList } from '@/components/molecules/AnimatedList';
import { RestaurantCard } from '@/components/molecules/RestaurantCard';
import { RestaurantInterface } from '@/interfaces/restaurant';
import useRestaurantsStore from '@/stores/restaurantStore';

type RestaurantListProps = {
  restaurantsInitialData: RestaurantInterface[];
};

export default function RestaurantList({ restaurantsInitialData }: RestaurantListProps) {
  const { restaurants } = useRestaurantsStore();

  // Otimização: useMemo para evitar recálculos desnecessários
  const [opened, closed] = useMemo(() => {
    const restaurantsRealData = restaurants.length === 0 ? restaurantsInitialData : restaurants;

    // Filtra apenas uma vez em vez de duas
    const opened: RestaurantInterface[] = [];
    const closed: RestaurantInterface[] = [];

    restaurantsRealData.forEach((restaurant) => {
      if (restaurant.isOpen) {
        opened.push(restaurant);
      } else {
        closed.push(restaurant);
      }
    });

    return [opened, closed];
  }, [restaurants, restaurantsInitialData]);

  return (
    <div className='max-md z-2 h-[100%] overflow-y-auto scroll-smooth bg-white p-4'>
      <h2 className='font-extrabold text-purple-700'>Aberto</h2>

      <AnimatedList
        items={opened}
        animationType='slide-up'
        staggerDelay={50}
        renderItem={(restaurant: RestaurantInterface) => (
          <div key={restaurant.id}>
            <Link href={`restaurante/${restaurant.id}`} prefetch={false}>
              <RestaurantCard
                restaurant={restaurant}
                type={restaurant.deliveryFee === 0 ? 'motorcycle' : 'aiqentregaPurple'}
              />
            </Link>
          </div>
        )}
      />

      <h2 className='mt-[12px] font-extrabold text-purple-700'>fechado</h2>

      <div className='pb-[200px]'>
        <AnimatedList
          items={closed}
          animationType='slide-up'
          staggerDelay={50}
          renderItem={(restaurant: RestaurantInterface) => (
            <div key={restaurant.id}>
              <RestaurantCard
                restaurant={restaurant}
                type={restaurant.deliveryFee === 0 ? 'motorcycle' : 'aiqentregaPurple'}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
}
