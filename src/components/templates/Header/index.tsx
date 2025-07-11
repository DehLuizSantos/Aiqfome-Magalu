import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className='sticky top-0 z-10 bg-purple-700 px-4 py-3 text-white'>
      <div className='container mx-auto flex max-w-[1000px] items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Link href={'/'}>
            <Image src='/logo.svg' alt='Logo' width={32} height={32} className='cursor-pointer' />
          </Link>

          <div className='ml-4 flex items-center'>
            <Image src='/icons/location.svg' alt='ver endereço' width={14} height={16} className='mr-[12px]' />
            <div className='flex flex-col justify-center'>
              <span className='text-purple-light text-xs'>entregando em</span>
              <span className='flex items-center gap-1 text-sm font-medium'>
                Rua Mandaguari, 198
                <Image src='/icons/arrow-right.svg' alt='ver endereço' width={6} height={11} />
              </span>
            </div>
          </div>
        </div>

        <Image src='/icons/user.svg' alt='usuário' width={24} height={24} className='cursor-pointer' />
      </div>
    </header>
  );
}
