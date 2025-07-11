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
}

export type HomeRestaurantInterface = Pick<
  RestaurantInterface,
  'id' | 'name' | 'rating' | 'image' | 'deliveryFee' | 'isOpen'
>;

export type OrderRestaurant = Pick<RestaurantInterface, 'id' | 'name' | 'isOpen' | 'image'>;
