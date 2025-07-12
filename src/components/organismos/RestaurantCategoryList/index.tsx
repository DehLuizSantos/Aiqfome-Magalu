import Image from 'next/image';

import AccordionCategories from '@/components/molecules/AccordionCategories';
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Category } from '@/interfaces/product';

// import { RestaurantProductCard } from './RestaurantProductCard';

interface RestaurantCategoryListProps {
  categories: Category[];
}

export function RestaurantCategoryList({ categories }: RestaurantCategoryListProps) {
  return (
    <div className='mt-4'>
      <AccordionCategories
        title='Ceviche de Salmão'
        description='Salmão temperado com limão, cebola e pimenta'
        hasPromotion>
        <p className='text-sm text-gray-700'>Aqui você pode colocar os customizations, ingredientes, etc.</p>
      </AccordionCategories>
    </div>
  );
}
