'use client';

import { useCallback, useEffect, useState } from 'react';

import { CustomizationOption } from '@/interfaces/product';
import { CustomizationTicketInterface, ProductTicketInterface } from '@/interfaces/ticket';
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
  const { products, setProducts } = useProductsStore();
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    // 1. Busca no Zustand
    const product = products.find((p) => p.id === productId);
    const selectedOption = product?.customization?.find((c) => c.groupName === groupName);

    if (selectedOption) {
      setSelectedValue(selectedOption.id);
      return;
    }

    // 2. Busca no sessionStorage para 'tamanho' ou 'talheres'
    if (['tamanho', 'talheres'].includes(groupName)) {
      try {
        const sessionData = sessionStorage.getItem('produtos');
        const sessionProducts: ProductTicketInterface[] = sessionData ? JSON.parse(sessionData) : [];

        const sessionProduct = sessionProducts.find((p) => p.id === productId);
        const sessionOption = sessionProduct?.customization?.find((c) => c.groupName === groupName);

        if (sessionOption) {
          setSelectedValue(sessionOption.id);
          return;
        }
      } catch (error) {
        console.error('Erro ao processar sessionStorage:', error);
      }
    }
  }, [products, productId, groupName, id]);

  const handleSelect = useCallback(() => {
    const updatedProducts = products.map((product) => {
      if (product.id !== productId) return product;

      const newCustomization: CustomizationTicketInterface = {
        groupName,
        label,
        id,
        price
      };

      const existingCustomizations = product.customization ?? [];

      const updatedCustomizations = [
        ...existingCustomizations.filter((c) => c.groupName !== groupName),
        newCustomization
      ];

      return {
        ...product,
        customization: updatedCustomizations
      };
    });

    setProducts(updatedProducts);
    sessionStorage.setItem('produtos', JSON.stringify(updatedProducts));
    setSelectedValue(id);
  }, [id, groupName, label, price, productId, products, setProducts]);

  const isProductInCart = products.some((p) => p.id === productId);

  return (
    <div className='mt-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <input
            className='h-4 w-4 rounded-full text-neutral-400'
            type='checkbox'
            id={id}
            name={groupName}
            value={selectedValue}
            checked={selectedValue === id}
            onChange={handleSelect}
            disabled={!isProductInCart}
          />
          <label
            htmlFor={id}
            className={`text-sm font-medium ${!isProductInCart ? 'text-neutral-300' : 'text-neutral-500'}`}>
            {label}
          </label>
        </div>

        <div>
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
