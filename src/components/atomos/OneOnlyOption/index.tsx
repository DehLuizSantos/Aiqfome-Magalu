'use client';

import { useEffect, useState } from 'react';

import { CustomizationOption, ProductCustomization } from '@/interfaces/product';
import { formatCurrency } from '@/utils/formats';

interface OneOnlyOptionProps extends CustomizationOption {
  groupName: string;
}

export default function OneOnlyOption({
  groupName,
  id,
  label,
  price,
  basePrice,
  defaultChecked,
  hasPromotions
}: OneOnlyOptionProps) {
  const [checked, setChecked] = useState('');
  const handleSelect = (id: string) => {
    setChecked(id);
  };

  return (
    <div className='mt-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <input
            className='h-4 w-4 text-neutral-400'
            type='radio'
            id={id}
            name={groupName}
            value={checked}
            defaultChecked={defaultChecked}
            onChange={() => handleSelect(id)}
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
