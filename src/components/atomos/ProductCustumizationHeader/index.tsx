import MandatoryTag from '../MandatoryTag';

type ProductCustumizationHeaderProps = {
  title: string;
  subtitle?: string;
  required: boolean;
};

export default function ProductCustumizationHeader({ required, subtitle, title }: ProductCustumizationHeaderProps) {
  return (
    <div className='flex justify-between'>
      <div className=''>
        <h4 className='text-base font-bold text-neutral-900 lowercase'>{title}</h4>
        <span className='text-xs font-bold text-neutral-500 lowercase'>
          {typeof subtitle === 'undefined' ? 'escolha quantos quiser' : subtitle}
        </span>
      </div>
      {required && <MandatoryTag />}
    </div>
  );
}
