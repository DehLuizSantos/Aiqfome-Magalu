'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { RestaurantInterface } from '@/interfaces/restaurant';
import { formatCurrency } from '@/utils/formats';

export type FeeType = 'aiqentregaPurple' | 'motorcycle';

type RestaurantCardProps = {
  type: FeeType;
  restaurant: RestaurantInterface;
};

export function RestaurantCard({ type, restaurant }: RestaurantCardProps) {
  const router = useRouter();

  const isClosed = restaurant.isOpen === false;

  const getColor = (type: FeeType) => {
    const colors = {
      motorcycle: 'text-teal-600',
      aiqentregaPurple: 'text-purple-700'
    };
    return colors[type];
  };

  return (
    <div
      onClick={() => !isClosed && router.push(`restaurante/${restaurant.name}`)}
      className='mt-4 flex cursor-pointer items-center gap-3 rounded-lg bg-neutral-100 transition hover:opacity-80'>
      <Image
        src={restaurant.image}
        alt={restaurant.name}
        width={72}
        height={72}
        className={`rounded-l-md object-cover ${isClosed ? 'opacity-50' : ''}`}
      />

      <div className='flex flex-col justify-center'>
        <span className={`font-bold text-neutral-700 ${restaurant.promotionRestaurant && 'mb-[-10px]'} `}>
          {restaurant.name}
        </span>
        <div className='mt-0.5 flex items-center gap-2 text-sm'>
          <span className={`flex items-center gap-1 font-bold ${getColor(type)}`}>
            <Image src={`/icons/${type}.svg`} alt='icon' className='h-6 w-6' width={24} height={24} />
            {restaurant.promotionRestaurant && <span className='mb-[10px] text-3xl text-neutral-400'>.</span>}
            <p>{formatCurrency(restaurant.deliveryFee)}</p>
          </span>
          <span className='text-warning flex items-center gap-1'>
            <Image src={'/icons/star.svg'} alt='Nota' width={18} height={18} />
            <span className='font-bold text-neutral-500'>{restaurant.rating.toFixed(1)}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
