import Home from '@/components/pages/HomePage';
import { Footer } from '@/components/templates/Footer';
import { fetchRestaurants } from '@/services/restaurants';

export default async function HomePage() {
  const restaurants = await fetchRestaurants();

  return (
    <div>
      <Home restaurants={restaurants} />
    </div>
  );
}
