import { RestaurantInterface } from '@/interfaces/restaurant';
import { fetchRestaurants } from '@/services/restaurants';

import { create } from 'zustand';

interface RestaurantStoreInterface {
  restaurants: RestaurantInterface[];
  loading: boolean;
  error: string | null;
  fetchAllRestaurants: () => Promise<RestaurantInterface[]>;
}

const useRestaurantsStore = create<RestaurantStoreInterface>((set, get) => ({
  restaurants: [],
  loading: false,
  error: null,
  fetchAllRestaurants: async () => {
    const data = await fetchRestaurants();
    set({ restaurants: data });
    return data;
  }
}));
export default useRestaurantsStore;
