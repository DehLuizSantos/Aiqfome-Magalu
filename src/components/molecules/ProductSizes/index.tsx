'use client';

import { useState } from 'react';

import ProductCustumizationHeader from '@/components/atomos/ProductCustumizationHeader';
import SizeOption from '@/components/atomos/SizeOption';
import { ProductInterface } from '@/interfaces/product';

type ProductSizesProps = Pick<ProductInterface, 'customizations'>;

export default function ProductSizes({ customizations }: ProductSizesProps) {
  const options = customizations[0].options;
  const defaultSelected = options.find((opt) => opt.defaultChecked) ?? options[0];
  const [selectedId, setSelectedId] = useState(defaultSelected.id);

  return (
    <div className='p-4'>
      <ProductCustumizationHeader
        required={customizations[0].required}
        subtitle={customizations[0].subtitle!}
        title={customizations[0].title}
      />

      <div className='mt-4'>
        {options.map((size) => (
          <SizeOption selected={selectedId === size.id} onSelect={(id) => setSelectedId(id)} {...size} key={size.id} />
        ))}
      </div>
    </div>
  );
}
