import { mockRestaurants } from '@/api-mock/restaurants';
import { RestaurantInterface } from '@/interfaces/restaurant';

export const fetchRestaurants = async (): Promise<RestaurantInterface[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return mockRestaurants;
};
