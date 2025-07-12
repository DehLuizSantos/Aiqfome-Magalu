import { mockRestaurants } from '@/api-mock/restaurants';
import { RestaurantInterface } from '@/interfaces/restaurant';

import { create } from 'zustand';

interface RestaurantStoreInterface {
  restaurants: RestaurantInterface[];
  openedRestaurants: RestaurantInterface[];
  closedRestaurants: RestaurantInterface[];
  loading: boolean;
  error: string | null;
  fetchRestaurants: () => void;
  searchRestaurants: (searchTerm: string) => void;
}

const useRestaurantsStore = create<RestaurantStoreInterface>((set) => ({
  restaurants: [],
  openedRestaurants: [],
  closedRestaurants: [],
  loading: false,
  error: null,

  fetchRestaurants: () => {
    set({ loading: true });

    setTimeout(() => {
      const data = mockRestaurants;

      set({
        restaurants: data,
        openedRestaurants: data.filter((restaurant) => restaurant.isOpen),
        closedRestaurants: data.filter((restaurant) => !restaurant.isOpen),
        loading: false,
        error: null
      });
    }, 1000);
  },

  searchRestaurants: (searchTerm: string) => {
    set({ loading: true });

    setTimeout(() => {
      const filtered = mockRestaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      set({
        restaurants: filtered,
        openedRestaurants: filtered.filter((r) => r.isOpen),
        closedRestaurants: filtered.filter((r) => !r.isOpen),
        loading: false,
        error: null
      });
    }, 600);
  }
}));

export default useRestaurantsStore;
