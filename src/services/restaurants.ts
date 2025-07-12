import { mockRestaurants } from '@/api-mock/restaurants';
import { RestaurantInterface } from '@/interfaces/restaurant';

export const fetchRestaurants = (search?: string): Promise<RestaurantInterface[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (search && typeof search === 'string') {
        const filtered = mockRestaurants.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(search.toLowerCase())
        );
        resolve(filtered);
      } else {
        resolve(mockRestaurants);
      }
    }, 500);
  });
};
