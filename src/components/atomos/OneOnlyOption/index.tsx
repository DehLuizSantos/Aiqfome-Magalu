'use client';

import { useEffect, useState } from 'react';

import { CustomizationOption, ProductCustomization } from '@/interfaces/product';
import { CustomizationTicketInterface } from '@/interfaces/ticket';
import useProductsStore from '@/stores/productStore';
import { formatCurrency } from '@/utils/formats';

interface OneOnlyOptionProps extends CustomizationOption {
  groupName: string;
  productId: string;
}

export default function OneOnlyOption({
  groupName,
  id,
  label,
  price,
  productId,
  basePrice,
  defaultChecked,
  hasPromotions
}: OneOnlyOptionProps) {
  const [checked, setChecked] = useState('');
  const { setProducts, products } = useProductsStore();

  useEffect(() => {
    if (defaultChecked) {
      setChecked(label);
    }
  }, [defaultChecked]);

  const handleSelect = (id: string) => {
    setChecked(id);
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        const newCustomization: CustomizationTicketInterface = {
          groupName,
          label,
          price
        };

        // Remove outras opções do mesmo grupo se existirem
        const filteredCustomizations = product.customization?.filter((c) => c.groupName !== groupName) || [];

        return {
          ...product,
          customization: [...filteredCustomizations, newCustomization]
        };
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  return (
    <div className='mt-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <input
            className='h-4 w-4 text-neutral-400'
            type='radio'
            id={id}
            disabled={products.length === 0}
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
