'use client';

import { useEffect, useState } from 'react';

import PriceControler from '@/components/atomos/PriceControler';
import { ProductInterface } from '@/interfaces/product';
import useProductsStore from '@/stores/productStore';
import { formatCurrency } from '@/utils/formats';

type ProductQuantityControlerProps = Pick<ProductInterface, 'price' | 'name' | 'id'>;

export default function ProductQuantityControler({ price, name, id }: ProductQuantityControlerProps) {
  const [quantity, setQuantity] = useState(0);
  const { products, setProducts } = useProductsStore();
  const priceControler = quantity * price;

  useEffect(() => {
    const updatedProducts = [...products];

    if (quantity === 0) {
      // Remove o produto se a quantidade for 0
      const filteredProducts = updatedProducts.filter((p) => p.id !== id);
      setProducts(filteredProducts);
    } else {
      // Atualiza ou adiciona o produto
      const productIndex = updatedProducts.findIndex((p) => p.id === id);

      if (productIndex >= 0) {
        updatedProducts[productIndex].quantity = quantity;
      } else {
        updatedProducts.push({ quantity, name, id, price });
      }

      setProducts(updatedProducts);
    }
  }, [quantity, id, name, price]);

  return (
    <div className='flex items-center justify-between bg-white p-4'>
      <div className='block'>
        <h4 className='font-bold text-neutral-700'>quantos</h4>
        <span className='text-sm font-semibold text-neutral-500'>total </span>
        <span className='text-sm font-bold text-neutral-700'>
          {quantity === 0 ? formatCurrency(price) : formatCurrency(priceControler)}
        </span>
      </div>
      {quantity === 0 ? (
        <button
          onClick={() => setQuantity((e) => e + 1)}
          className='h-[40px] w-[108px] rounded-lg bg-neutral-500 text-white'>
          adicionar
        </button>
      ) : (
        <PriceControler quantity={quantity} setQuantity={setQuantity} />
      )}
    </div>
  );
}
