import Image from 'next/image';

interface RestaurantHeaderProps {
  name: string;
  logo: string;
}

export function RestaurantHeader({ name, logo }: RestaurantHeaderProps) {
  return (
    <div className='flex flex-col justify-between gap-3 px-4'>
      <div className='flex items-center gap-3'>
        <Image src={logo} alt={name} width={36} height={36} className='rounded' />
        <h1 className='text-[1.25rem] font-extrabold text-neutral-900'>{name}</h1>
      </div>
      <div className='text-purple-brand flex items-center justify-between gap-4'>
        <div className='flex items-center gap-4'>
          <Image src='/icons/share.svg' alt='Comportilhe o restaurante' width={16} height={18} />

          <button>
            <Image src='/icons/heart.svg' alt='Favoritar restaurante' width={18} height={16} />
          </button>
        </div>
        <a href='#' className='flex items-center gap-1 font-bold text-teal-400'>
          <span>mais infos</span>
          <span className={`rotate-270 font-bold`}>&#9013;</span>
        </a>
      </div>
    </div>
  );
}
