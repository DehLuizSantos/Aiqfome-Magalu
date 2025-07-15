import { FeeType } from '@/components/molecules/RestaurantCard';

export const getColor = (type: FeeType) => {
  const colors = {
    motorcycle: 'text-teal-600',
    aiqentregaPurple: 'text-purple-700'
  };
  return colors[type];
};
