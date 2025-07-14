'use client';

import { useState } from 'react';

import DrinkOptions from '@/components/atomos/DrinkOptions';
import ProductCustumizationHeader from '@/components/atomos/ProductCustumizationHeader';
import { ProductInterface } from '@/interfaces/product';

type ProductDrinkOptionProps = Pick<ProductInterface, 'customizations'>;

export default function ProductDrinkOption({ customizations }: ProductDrinkOptionProps) {
  return (
    <div className='p-4'>
      <ProductCustumizationHeader
        required={customizations[0].required}
        subtitle={customizations[0].subtitle!}
        title={customizations[0].title}
      />

      <div className=''>
        {customizations[0].options.map((option) => (
          <DrinkOptions label={option.label} price={option.price} key={option.id} />
        ))}
      </div>
    </div>
  );
}
