import { mockRestaurants } from '@/api-mock/restaurants';
import { RestaurantInterface } from '@/interfaces/restaurant';

export const fetchRestaurants = (id?: number): Promise<RestaurantInterface[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (id && typeof id === 'number') {
        const filtered = mockRestaurants.filter((restaurant) => restaurant.id === id);
        resolve(filtered);
      } else {
        resolve(mockRestaurants);
      }
    }, 500);
  });
};
