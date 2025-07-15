'use client';

import { useEffect } from 'react';

import { ProductTicketInterface } from '@/interfaces/ticket';

import { create } from 'zustand';

interface ProductStoreInterface {
  products: ProductTicketInterface[];
  setProducts: (value: ProductTicketInterface[]) => void;
  total: number;
  error: string;
  setError: (value: string) => void;
}

const calculateTotal = (products: ProductTicketInterface[]): number => {
  return products.reduce((acc, produto) => {
    const { quantity, price: defaultPrice, customization = [] } = produto;

    let customTotal = 0;
    let sizePrice = defaultPrice;

    for (const item of customization) {
      if (item.groupName === 'tamanho') {
        // Substitui o preço principal
        if (item.price !== undefined) {
          sizePrice = item.price;
        }
        continue; // Não soma no customTotal
      }

      if (item.quantity && item.quantity > 1) {
        customTotal += (item.price || 0) * item.quantity;
      } else {
        customTotal += item.price || 0;
      }
    }

    return acc + (sizePrice + customTotal) * quantity;
  }, 0);
};

// Função para salvar no sessionStorage sempre que os produtos mudarem
const syncWithSessionStorage = (products: ProductTicketInterface[]) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('produtos', JSON.stringify(products));
  }
};

const useProductsStore = create<ProductStoreInterface>((set) => ({
  products: [],
  total: 0,
  error: '',
  setError: (value) => {
    set({ error: value });
  },
  setProducts: (value) => {
    const updated = value.map((product) => {
      const tamanho = product.customization?.find((c) => c.groupName === 'tamanho');

      return {
        ...product,
        price: tamanho?.price ?? product.price // substitui se existir
      };
    });

    const newTotal = calculateTotal(updated);
    syncWithSessionStorage(updated);
    set({ products: updated, total: newTotal });
  }
}));

export default useProductsStore;

export function useInitProductsFromSession() {
  const setProducts = useProductsStore((state) => state.setProducts);

  useEffect(() => {
    const stored = sessionStorage.getItem('produtos');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ProductTicketInterface[];
        setProducts(parsed);
      } catch (err) {
        console.error('Erro ao parsear produtos do sessionStorage:', err);
      }
    }
  }, [setProducts]);
}
