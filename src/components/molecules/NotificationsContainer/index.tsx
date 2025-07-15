'use client';

import { useEffect, useState } from 'react';

import useNotificationStore from '@/stores/notificationStore';

interface AnimatedNotificationProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

function AnimatedNotification({ id, message, type }: AnimatedNotificationProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const removeNotification = useNotificationStore((s) => s.removeNotification);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2500); // Começa a sair antes
    const fullTimer = setTimeout(() => removeNotification(id), 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(fullTimer);
    };
  }, [id, removeNotification]);

  const baseColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';

  return (
    <div
      className={`w-full rounded px-4 py-3 text-sm text-white shadow transition-all duration-300 ${baseColor} ${
        fadeOut ? 'animate-fade-out-up' : 'animate-fade-in-down'
      }`}>
      {message}
    </div>
  );
}

export default function NotificationContainer() {
  const { notifications } = useNotificationStore();

  return (
    <div className='fixed top-[60px] left-1/2 z-50 flex h-[60px] w-full max-w-md -translate-x-1/2 flex-col items-center space-y-2'>
      {notifications.map((n) => (
        <AnimatedNotification key={n.id} {...n} type={n.type || 'info'} />
      ))}
    </div>
  );
}
