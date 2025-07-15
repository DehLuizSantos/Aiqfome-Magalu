import Image from 'next/image';

type TicketHeaderProps = {
  title: string;
  image: string;
};

export default function TicketHeader({ image, title }: TicketHeaderProps) {
  return (
    <div className='mt-6 px-4'>
      <div className='flex items-center gap-2'>
        <Image className='object-contain' src={image} alt={title} width={32} height={32} />
        <div className=''>
          <p className='font-bold text-neutral-500'>seus itens em</p>
          <h4 className='font-bold text-neutral-900'>{title}</h4>
        </div>
      </div>
    </div>
  );
}
