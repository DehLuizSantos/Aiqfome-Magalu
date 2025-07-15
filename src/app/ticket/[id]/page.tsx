import { notFound } from 'next/navigation';

import TicketHeader from '@/components/molecules/TicketHeader';
import TicketProductList from '@/components/organismos/TicketProductList';
import { fetchRestaurants } from '@/services/restaurants';

type TicketPageProps = Promise<{
  id: string;
}>;

export default async function TicketPage({ params }: { params: TicketPageProps }) {
  const { id } = await params;
  const restaurants = await fetchRestaurants();

  const restaurant = restaurants.find((r) => r.id === Number(id));
  if (!restaurant) return notFound();

  return (
    <div>
      <TicketHeader image={restaurant.image} title={restaurant.name} />
      <TicketProductList />
    </div>
  );
}
