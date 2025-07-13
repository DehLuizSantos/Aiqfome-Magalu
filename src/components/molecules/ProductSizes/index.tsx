'use client';

import { useState } from 'react';

import MandatoryTag from '@/components/atomos/MandatoryTag';
import SizeOption from '@/components/atomos/SizeOption';
import { ProductInterface } from '@/interfaces/product';

type ProductSizesProps = Pick<ProductInterface, 'customizations'>;

export default function ProductSizes({ customizations }: ProductSizesProps) {
  const options = customizations[0].options;
  const defaultSelected = options.find((opt) => opt.defaultChecked) ?? options[0];
  const [selectedId, setSelectedId] = useState(defaultSelected.id);

  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <div className=''>
          <h4 className='text-base font-bold text-neutral-900 lowercase'>{customizations[0].title}</h4>
          <span className='text-xs font-bold text-neutral-500 lowercase'>{customizations[0].subtitle}</span>
        </div>
        {customizations[0].required && <MandatoryTag />}
      </div>
      <div className='mt-4'>
        {options.map((size) => (
          <SizeOption selected={selectedId === size.id} onSelect={(id) => setSelectedId(id)} {...size} key={size.id} />
        ))}
      </div>
    </div>
  );
}
