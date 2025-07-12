import { mockRestaurants } from '@/api-mock/restaurants';
import { RestaurantInterface } from '@/interfaces/restaurant';
import { normalizeText } from '@/utils/formats';

import { create } from 'zustand';

interface RestaurantStoreInterface {
  restaurants: RestaurantInterface[];

  setRestaurants: (searchTerm: string) => void;
  loading: boolean;
  error: string | null;
}

const useRestaurantsStore = create<RestaurantStoreInterface>((set) => ({
  restaurants: [],
  setRestaurants: (value: string) => {
    set({ loading: true });
    const normalizedSearch = normalizeText(value);

    const filtered = mockRestaurants.filter((restaurant) => {
      const normalizedName = normalizeText(restaurant.name);
      const normalizedCategory = normalizeText(restaurant.category || '');

      return normalizedName.includes(normalizedSearch) || normalizedCategory.includes(normalizedSearch);
    });
    set({
      restaurants: filtered,
      loading: false,
      error: null
    });
  },

  loading: false,
  error: null
}));

export default useRestaurantsStore;
