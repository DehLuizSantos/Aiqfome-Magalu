import { notFound } from 'next/navigation';

import ProductDetailsHeader from '@/components/molecules/ProductDetailsHeader';
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

  const product = restaurant.categories.flatMap((category) => category.products).find((p) => p.id === productId);

  if (!product) return notFound();

  return (
    <div className=''>
      <ProductDetailsHeader {...product} />
    </div>
  );
}
