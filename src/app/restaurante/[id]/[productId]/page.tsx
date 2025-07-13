import { notFound } from 'next/navigation';

import ProductDetailsHeader from '@/components/molecules/ProductDetailsHeader';
import ProductQuantityControler from '@/components/molecules/ProductQuantityControler';
import ProductSizes from '@/components/molecules/ProductSizes';
import { ProductInterface } from '@/interfaces/product';
import { fetchRestaurants } from '@/services/restaurants';

type ProductPageProps = Promise<{
  id: string;
  productId: string;
}>;

export default async function ProductPage({ params }: { params: ProductPageProps }) {
  const { id, productId } = await params;
  const restaurants = await fetchRestaurants();

  const restaurant = restaurants.find((r) => r.id === Number(id));

  if (!restaurant) return notFound();

  const product: ProductInterface | undefined = restaurant!
    .categories!.flatMap((category) => category.products)
    .find((p) => p.id === productId);

  if (!product) return notFound();

  const sizes = product.customizations.filter((custumization) => custumization.id === 'tamanho');

  return (
    <div className=''>
      <div className=''>
        <ProductDetailsHeader {...product} />
        <div className='h-1 w-full bg-neutral-100' />
        <ProductQuantityControler {...product} />
        <div className='h-1 w-full bg-neutral-100' />
        <ProductSizes customizations={sizes} />
      </div>
    </div>
  );
}
