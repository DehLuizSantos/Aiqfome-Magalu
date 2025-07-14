import DrinkOptions from '@/components/atomos/DrinkOptions';
import MultipleOption from '@/components/atomos/MultipleOption';
import OneOnlyOption from '@/components/atomos/OneOnlyOption';
import ProductCustumizationHeader from '@/components/atomos/ProductCustumizationHeader';
import TextArea from '@/components/atomos/TextArea';
import { ProductCustomization } from '@/interfaces/product';

type ProductCustomizationProps = {
  customizations: ProductCustomization[];
};

export default function ProductCustomizations({ customizations }: ProductCustomizationProps) {
  return (
    <div className='p-4'>
      {customizations.map((customization) => (
        <div key={customization.id}>
          <div className='mb-4 h-1 w-full bg-neutral-100' />
          <div className=''>
            <ProductCustumizationHeader
              required={customization.required}
              subtitle={customization.subtitle!}
              title={customization.title}
            />
          </div>
          <>
            {customization.options.map((option) => {
              const custumizationTypes = {
                single: <OneOnlyOption {...option} groupName={customization.type} />,
                multiple: <MultipleOption {...option} />,
                quantity: <DrinkOptions {...option} />
              };
              return (
                <div className='m-3' key={option.id}>
                  {custumizationTypes[customization.type]}
                </div>
              );
            })}
          </>
        </div>
      ))}
      <div className='mb-4 h-1 w-full bg-neutral-100' />
      <TextArea />
    </div>
  );
}
