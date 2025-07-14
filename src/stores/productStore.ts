import { ProductInterface } from '@/interfaces/product';

import { create } from 'zustand';

interface ProductStoreInterface {
  products: ProductInterface[];
  setProducts: (value: ProductInterface[]) => void;
}

// Carrega os produtos do localStorage ao inicializar
const loadProductsFromLocalStorage = (): ProductInterface[] => {
  if (typeof window !== 'undefined') {
    const produtosLocal = localStorage.getItem('produtos');
    return produtosLocal ? JSON.parse(produtosLocal) : [];
  }
  return [];
};

const useProductsStore = create<ProductStoreInterface>((set) => ({
  products: loadProductsFromLocalStorage(),
  setProducts: (value) => {
    set({ products: value });
  }
}));

export default useProductsStore;
