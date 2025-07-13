import { CustomizationOption } from '@/interfaces/product';
import { formatCurrency } from '@/utils/formats';

interface SizeOptionProps extends CustomizationOption {
  selected: boolean;
  onSelect: (id: string) => void;
}

export default function SizeOption({
  label,
  hasPromotions,
  price,
  basePrice,
  id,
  onSelect,
  selected
}: SizeOptionProps) {
  return (
    <div className='mt-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <input
            className='h-4 w-4 text-neutral-400'
            type='radio'
            id={id}
            checked={selected!}
            name={label}
            onChange={() => onSelect(id)}
          />
          <label className='text-sm font-medium text-neutral-500' htmlFor={id}>
            {label}
          </label>
        </div>

        <div className=''>
          {hasPromotions ? (
            <>
              <span className='text-xs font-bold text-neutral-500'>de {formatCurrency(basePrice!)} por </span>
              <span className='text-sm font-bold text-green-500'>{formatCurrency(price)}</span>
            </>
          ) : (
            <span className='text-sm font-bold text-purple-500'>{formatCurrency(price)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
