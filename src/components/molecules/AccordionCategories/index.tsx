'use client';

import { useState } from 'react';

import Image from 'next/image';

interface AccordionProps {
  title: string;
  description?: string;
  hasPromotion?: boolean;
  children: React.ReactNode;
}

export default function AccordionCategories({ title, description, hasPromotion, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mb-4'>
      <button
        className='w-full cursor-pointer bg-white pt-[16px] pr-[30px] pl-[16px] text-start transition-colors hover:bg-gray-50'
        onClick={() => setIsOpen((prev) => !prev)}>
        <div className='flex items-center justify-between'>
          <div className='flex gap-1.5'>
            <span className='font-bold text-neutral-900'>{title}</span>
            {hasPromotion && (
              <Image src='/icons/circle-dollar.svg' alt='Item em promoção' width={18} height={18} className='h-5 w-5' />
            )}
          </div>
          <div className={`text-neutral-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <span className={`rotate-270 text-xl font-extrabold`}>&#9013;</span>
          </div>
        </div>
        {description && <p className='text-xs font-semibold text-neutral-500'>{description}</p>}
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] p-4 pt-0' : 'max-h-0'}`}>
        {children}
      </div>
      <div className='h-1 w-full bg-neutral-100' />
    </div>
  );
}
