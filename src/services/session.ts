import { ProductInterface } from '@/interfaces/product';

export const getProductFromSession = (productId: string): ProductInterface | null => {
  if (typeof window === 'undefined') return null;
  const sessionProducts = sessionStorage.getItem('edit-products');
  if (!sessionProducts) return null;

  const products = JSON.parse(sessionProducts);
  return products.find((p: ProductInterface) => p.id === productId) || null;
};

export const saveProductToSession = (product: ProductInterface) => {
  if (typeof window === 'undefined') return;

  const sessionProducts = sessionStorage.getItem('edit-products');
  let products = sessionProducts ? JSON.parse(sessionProducts) : [];

  // Remove o produto existente se já estiver na sessão
  products = products.filter((p: ProductInterface) => p.id !== product.id);

  // Adiciona o novo produto
  products.push(product);

  sessionStorage.setItem('edit-products', JSON.stringify(products));
};
