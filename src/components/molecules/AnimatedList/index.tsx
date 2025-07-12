'use client';

import { ReactNode, useEffect, useRef } from 'react';

type AnimatedListProps = {
  items: any[];
  renderItem: (item: any) => ReactNode;
  className?: string;
  itemClassName?: string;
  animationType?: 'fade' | 'slide-up' | 'scale';
  staggerDelay?: number;
};

export function AnimatedList({
  items,
  renderItem,
  className = '',
  itemClassName = '',
  animationType = 'fade',
  staggerDelay = 50
}: AnimatedListProps) {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Efeitos de animação baseados no tipo
  const getAnimationClasses = (type: string) => {
    switch (type) {
      case 'slide-up':
        return {
          initial: 'translate-y-6 opacity-0',
          animated: 'translate-y-0 opacity-100'
        };
      case 'scale':
        return {
          initial: 'scale-95 opacity-0',
          animated: 'scale-100 opacity-100'
        };
      default: // fade
        return {
          initial: 'opacity-0',
          animated: 'opacity-100'
        };
    }
  };

  useEffect(() => {
    itemsRef.current.forEach((el, index) => {
      if (!el) return;

      const { initial } = getAnimationClasses(animationType);
      el.className = `${itemClassName} ${initial} transition-all duration-300 ease-out`;

      setTimeout(() => {
        const { animated } = getAnimationClasses(animationType);
        el.className = `${itemClassName} ${animated} transition-all duration-300 ease-out`;
      }, index * staggerDelay);
    });
  }, [items, animationType, itemClassName, staggerDelay]);

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div
          key={item.id || index}
          ref={(el: HTMLDivElement | null) => {
            if (el) {
              itemsRef.current[index] = el;
            }
          }}
          className={`${itemClassName} ${getAnimationClasses(animationType).initial}`}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
