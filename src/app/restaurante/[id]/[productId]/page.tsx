import { notFound } from 'next/navigation';

import ButtonSeeTicket from '@/components/atomos/ButtonSeeTicket';
import NotificationContainer from '@/components/molecules/NotificationsContainer';
import ProductDetailsHeader from '@/components/molecules/ProductDetailsHeader';
import ProductQuantityControler from '@/components/molecules/ProductQuantityControler';
import ProductCustomizations from '@/components/organismos/ProductCustomizations';
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

  return (
    <div className='h-full overflow-y-auto pb-[120px]'>
      <div className=''>
        <ProductDetailsHeader {...product} />
        <div className='bg-neutrals-100 h-1 w-full' />
        <ProductQuantityControler {...product} />

        <ProductCustomizations productId={productId} customizations={product.customizations} />
      </div>
      <ButtonSeeTicket id={id} />
      <NotificationContainer />
    </div>
  );
}
