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
  products: typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('produtos') || '[]') : [],
  setProducts: (value) => {
    syncWithSessionStorage(value); // Sincroniza com sessionStorage
    set({ products: value });
  }
}));

export default useProductsStore;
