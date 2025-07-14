'use client';

import { useEffect } from 'react';

import { ProductTicketInterface } from '@/interfaces/ticket';

import { create } from 'zustand';

interface ProductStoreInterface {
  products: ProductTicketInterface[];
  setProducts: (value: ProductTicketInterface[]) => void;
}

// Função para salvar no sessionStorage sempre que os produtos mudarem
const syncWithSessionStorage = (products: ProductTicketInterface[]) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('produtos', JSON.stringify(products));
  }
};

const useProductsStore = create<ProductStoreInterface>((set) => ({
  products: [],
  setProducts: (value) => {
    syncWithSessionStorage(value); // Sincroniza com sessionStorage
    set({ products: value });
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
