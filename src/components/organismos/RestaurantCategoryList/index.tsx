import Image from 'next/image';

import AccordionCategories from '@/components/molecules/AccordionCategories';
import { RestaurantProductCard } from '@/components/molecules/ProductCard';
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Category } from '@/interfaces/product';

// import { RestaurantProductCard } from './RestaurantProductCard';

interface RestaurantCategoryListProps {
  categories: Category[];
  id: string;
}

export function RestaurantCategoryList({ categories, id }: RestaurantCategoryListProps) {
  return (
    <div className='mt-4'>
      {categories.map((category) => (
        <AccordionCategories key={category.id} title={category.name} description={category.description} hasPromotion>
          {category.products.map((product) => (
            <RestaurantProductCard key={product.id} id={id} product={product} />
          ))}
        </AccordionCategories>
      ))}
    </div>
  );
}
