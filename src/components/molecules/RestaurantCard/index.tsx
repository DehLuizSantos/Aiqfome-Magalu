'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { RestaurantInterface } from '@/interfaces/restaurant';

// import { DeliveryType } from './DeliveryType';

export function RestaurantCard(props: RestaurantInterface) {
  const router = useRouter();

  const isClosed = props.isOpen === false;

  return (
    <div
      onClick={() => !isClosed && router.push(`restaurante/${props.name}`)}
      className='mt-4 flex cursor-pointer items-center gap-3 rounded-lg bg-neutral-100 transition hover:opacity-80'>
      <Image
        src={props.image}
        alt={props.name}
        width={72}
        height={72}
        className={`rounded-l-md object-cover ${isClosed ? 'opacity-50' : ''}`}
      />

      <div className='flex flex-col justify-center'>
        <span className='text-text-medium text-sm font-medium'>{props.name}</span>
        <div className='mt-0.5 flex items-center gap-2 text-sm'>
          {/* <DeliveryType type={props.deliveryType} deliveryFee={props.deliveryFee} /> */}
          <span className='text-warning flex items-center gap-1'>
            {/* <Star size={20} fill='currentColor' strokeWidth={0} /> */}
            <span className='text-light-text font-bold'>{props.rating.toFixed(1)}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
