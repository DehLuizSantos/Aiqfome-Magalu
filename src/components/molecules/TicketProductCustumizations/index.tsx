import { CustomizationTicketInterface } from '@/interfaces/ticket';
import { formatCurrency } from '@/utils/formats';

type TicketProductCustomizationsProps = {
  customization: CustomizationTicketInterface[];
};

export default function TicketProductCustomizations({ customization }: TicketProductCustomizationsProps) {
  return (
    <>
      <div className='w-full px-4 pb-4'>
        {customization?.map((customization, index) => (
          <ul className='mb-1' key={index}>
            <li className='text-xs font-bold text-neutral-500'>
              <span className='text-xl font-bold text-neutral-500'>.</span> {customization.groupName}
            </li>
            <ol>
              <li className='flex justify-between'>
                <span className='text-xs font-semibold text-neutral-500'>{customization.label}</span>
                {customization.price !== 0 && (
                  <p className='text-xs font-bold text-teal-600'>+{formatCurrency(customization.price!)}</p>
                )}
              </li>
            </ol>
          </ul>
        ))}
      </div>
      <div className='h-1 w-full bg-neutral-100'></div>
    </>
  );
}
