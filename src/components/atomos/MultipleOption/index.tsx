'use client';

import { CustomizationOption } from '@/interfaces/product';
import { CustomizationTicketInterface } from '@/interfaces/ticket';
import useProductsStore from '@/stores/productStore';

interface MultipleOptionProps extends CustomizationOption {
  min?: number;
  max?: number;
  groupName: string;
  productId: string;
}

export default function MultipleOption({ label, min, max, groupName, id, price, productId }: MultipleOptionProps) {
  const { products, setProducts } = useProductsStore();

  const handleToggle = () => {
    const updatedProducts = products.map((product) => {
      if (product.id !== productId) return product;

      const existingCustomization = product.customization || [];

      const alreadyExists = existingCustomization.some((c) => c.groupName === groupName && c.label === label);

      const updatedCustomization = alreadyExists
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

  const allMultipleProducts = products
    .flatMap((product) => product.customization || [])
    .filter((custom) => custom.groupName === 'acompanhamentos' || custom.groupName === 'adicionais');

  console.log(allMultipleProducts);
  return (
    <div className='mt-4 flex items-center gap-2'>
      <input
        onChange={handleToggle}
        checked={isChecked}
        disabled={products.length === 0}
        className='h-4 w-4'
        type='checkbox'
      />
      <label htmlFor=''>{label}</label>
    </div>
  );
}
