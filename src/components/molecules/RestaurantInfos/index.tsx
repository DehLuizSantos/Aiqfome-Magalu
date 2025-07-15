import Image from 'next/image';

import { RestaurantInfosInterface } from '@/interfaces/restaurant';
import { formatCurrency } from '@/utils/formats';
import { getColor } from '@/utils/functions';

export function RestaurantInfo({
  deliveryFee,
  distance,
  estimatedDeliveryTime,
  maxValueDeliveryFee,
  minimumOrderPrice,
  rating
  //   deliveryType
}: RestaurantInfosInterface) {
  const type = deliveryFee === 0 ? 'motorcycle' : 'aiqentregaPurple';
  return (
    <div className='mt-1 space-y-1 px-4 text-sm'>
      <p className='flex items-center gap-2'>
        <Image src={`/icons/${type}.svg`} alt='icon' className='h-6 w-6' width={24} height={24} />
        <span className={`${getColor(type)} font-bold`}>{formatCurrency(deliveryFee)}</span>
        <span className={`${getColor(type)} rotate-270 font-bold`}>&#9013;</span>

        <span className='text-neutrals-500 text-sm font-bold'>
          hoje, {estimatedDeliveryTime.min} • {estimatedDeliveryTime.max}km
        </span>
      </p>

      <div className='mt-2 w-fit rounded bg-teal-50 px-3 py-1.5 text-sm font-bold text-teal-600'>
        entrega grátis acima de {formatCurrency(maxValueDeliveryFee)}
      </div>

      <p className='mt-2 flex items-center gap-2'>
        <Image src={'/icons/star.svg'} alt='Nota' width={12} height={12} />
        <span className='text-neutrals-500 text-sm font-bold'>{rating} de 5</span>
        <span className={`text-neutrals-500 rotate-270 font-bold`}>&#9013;</span>

        <span className='text-neutrals-400 text-sm font-bold'>•</span>
        <span className='font-bold text-green-500'>fecha às 20:00</span>
      </p>

      <div className='mt-2 text-sm font-bold text-neutral-500'>pedido mínimo: {formatCurrency(minimumOrderPrice)}</div>
    </div>
  );
}
