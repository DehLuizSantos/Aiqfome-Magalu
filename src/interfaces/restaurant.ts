import { Category } from './product';

export interface RestaurantInterface {
  id: number;
  name: string;
  rating: number;
  image: string;
  minimumOrderPrice: number;
  deliveryFee: number;
  estimatedDeliveryTime: {
    min: number;
    max: number;
  };
  distance: number;
  maxValueDeliveryFee: number;
  closingTime: string;
  openingTime: string;
  isOpen: boolean;
  promotionRestaurant: boolean;
  category: 'lanches' | 'saudavel' | 'japones';
  categories: Category[];
}

export type RestaurantInfosInterface = Pick<
  RestaurantInterface,
  'estimatedDeliveryTime' | 'deliveryFee' | 'distance' | 'maxValueDeliveryFee' | 'rating' | 'minimumOrderPrice'
>;
