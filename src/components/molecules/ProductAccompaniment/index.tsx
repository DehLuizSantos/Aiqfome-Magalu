import ProductCustumizationHeader from '@/components/atomos/ProductCustumizationHeader';
import { ProductInterface } from '@/interfaces/product';

type ProductAccompanimentProps = Pick<ProductInterface, 'customizations'>;

export default function ProductAccompaniment({ customizations }: ProductAccompanimentProps) {
  return (
    <div className='p-4'>
      <ProductCustumizationHeader
        required={customizations[0].required}
        subtitle={customizations[0].subtitle!}
        title={customizations[0].title}
      />
      {customizations[0].options.map((option) => (
        <div key={option.id} className='mt-4 flex items-center gap-2'>
          <input className='h-4 w-4' type='checkbox' />
          <label htmlFor=''>{option.label}</label>
        </div>
      ))}
    </div>
  );
}
