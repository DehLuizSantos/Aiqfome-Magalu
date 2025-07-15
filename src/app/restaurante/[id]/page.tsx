import { notFound } from 'next/navigation';

import { RestaurantHeader } from '@/components/molecules/RestaurantHeader';
import { RestaurantInfo } from '@/components/molecules/RestaurantInfos';
import { RestaurantCategoryList } from '@/components/organismos/RestaurantCategoryList';
import { fetchRestaurants } from '@/services/restaurants';

type RestaurantPageProps = Promise<{
  id: string;
  productId: string;
}>;

export default async function RestaurantPage({ params }: { params: RestaurantPageProps }) {
  const { id } = await params;
  const restaurants = await fetchRestaurants();

  const restaurant = restaurants.find((r) => r.id === Number(id));

  if (!restaurant) return notFound();

  return (
    <div className='mt-2 flex flex-col'>
      <div className='container mx-auto min-h-[calc(100vh+220px)] max-w-[1000px]'>
        <div className='flex-grow'>
          <div className='space-y-3 py-4'>
            <RestaurantHeader logo={restaurant.image} name={restaurant.name} />
            <RestaurantInfo
              deliveryFee={restaurant.deliveryFee}
              distance={restaurant.distance}
              estimatedDeliveryTime={restaurant.estimatedDeliveryTime}
              maxValueDeliveryFee={restaurant.maxValueDeliveryFee}
              minimumOrderPrice={restaurant.minimumOrderPrice}
              rating={restaurant.rating}
            />
            <RestaurantCategoryList categories={restaurant.categories} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
