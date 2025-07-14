'use client';

import { useState } from 'react';

import { CustomizationOption } from '@/interfaces/product';
import { CustomizationTicketInterface } from '@/interfaces/ticket';
import useNotificationStore from '@/stores/notificationStore';
import useProductsStore from '@/stores/productStore';
import { formatCurrency } from '@/utils/formats';

interface MultipleOptionProps extends CustomizationOption {
  min?: number;
  max?: number;
  groupName: string;
  productId: string;
}

export default function MultipleOption({ label, min, max, groupName, id, price, productId }: MultipleOptionProps) {
  const { products, setProducts } = useProductsStore();
  const { addNotification } = useNotificationStore();

  const allSelectedOfGroup = products.flatMap((p) => p.customization || []).filter((c) => c.groupName === groupName);

  const handleToggle = () => {
    const alreadySelected = isChecked;

    if (!alreadySelected && max && allSelectedOfGroup.length >= max) {
      addNotification(`Você só pode selecionar até ${max} ${groupName}.`, 'error');
      return;
    }

    const updatedProducts = products.map((product) => {
      if (product.id !== productId) return product;

      const existingCustomization = product.customization || [];

      const updatedCustomization = alreadySelected
        ? existingCustomization.filter((c) => !(c.groupName === groupName && c.label === label))
        : [...existingCustomization, { groupName, label, price }];

      return {
        ...product,
        customization: updatedCustomization
      };
    });

    setProducts(updatedProducts);
  };
  const product = products.find((p) => p.id === productId);
  const isChecked = !!product?.customization?.some((c) => c.groupName === groupName && c.label === label);

  return (
    <div className='flex justify-between'>
      <div className='mt-4 flex items-center gap-2'>
        <input
          onChange={handleToggle}
          checked={isChecked}
          disabled={products.length === 0}
          className='h-4 w-4'
          type='checkbox'
          id={label}
        />
        <label htmlFor={label}>{label}</label>
      </div>
      <span className='text-sm font-bold text-purple-500'>+{formatCurrency(price)}</span>
    </div>
  );
}
