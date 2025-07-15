'use client';

import { useEffect, useState } from 'react';

import useProductsStore from '@/stores/productStore';
import { formatCurrency } from '@/utils/formats';

import PriceControler from '../PriceControler';

type DrinkOptionProps = {
  label: string;
  price: number;
  productId: string;
  groupName: string; // ex: 'bebidas'
  id: string;
};

export default function DrinkOptions({ label, price, productId, groupName, id }: DrinkOptionProps) {
  const { products, setProducts } = useProductsStore();

  const product = products.find((p) => p.id === productId);
  const current = product?.customization?.find((c) => c.groupName === groupName && c.label === label);

  const [quantity, setQuantity] = useState(current?.quantity || 0);

  useEffect(() => {
    const updatedProducts = products.map((product) => {
      if (product.id !== productId) return product;

      const existingCustomization = product.customization || [];

      const alreadyExists = existingCustomization.some((c) => c.groupName === groupName && c.label === label);

      let updatedCustomization;

      if (quantity === 0) {
        // Remove se quantidade zerar
        updatedCustomization = existingCustomization.filter((c) => !(c.groupName === groupName && c.label === label));
      } else if (alreadyExists) {
        // Atualiza quantidade
        updatedCustomization = existingCustomization.map((c) =>
          c.groupName === groupName && c.label === label ? { ...c, quantity, price } : c
        );
      } else {
        // Adiciona novo
        updatedCustomization = [...existingCustomization, { groupName, label, price, quantity, id }];
      }

      return {
        ...product,
        customization: updatedCustomization
      };
    });

    setProducts(updatedProducts);
  }, [quantity]);

  return (
    <div className='mt-4 flex justify-between'>
      <div className='flex items-center gap-2'>
        <PriceControler type='minus' quantity={quantity} setQuantity={setQuantity} />
        <span className='text-sm font-semibold text-neutral-500'>{label}</span>
      </div>
      <h4 className='text-sm font-bold text-purple-500'>+{formatCurrency(price)}</h4>
    </div>
  );
}
