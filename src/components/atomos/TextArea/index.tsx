'use client';

import { ChangeEvent } from 'react';

import useProductsStore from '@/stores/productStore';

interface TextAreaProps {
  productId: string;
}

export default function TextArea({ productId }: TextAreaProps) {
  const { products, setProducts } = useProductsStore();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, observation: event.target.value } : product
    );

    setProducts(updatedProducts);
    sessionStorage.setItem('produtos', JSON.stringify(updatedProducts));
  };

  // Pega o valor atual da observação, se existir
  const currentObservation = products.find((p) => p.id === productId)?.observation ?? '';
  return (
    <div>
      <textarea
        value={currentObservation}
        onChange={handleChange}
        placeholder='alguma observação do item? • opcional ex: tirar algum ingrediente, ponto do prato'
        className='h-full w-full rounded-[6px] border-1 border-solid border-neutral-200 px-[16px] py-[10px] text-sm font-semibold text-neutral-500'></textarea>
    </div>
  );
}
