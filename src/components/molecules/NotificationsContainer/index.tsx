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
    const timer = setTimeout(() => setFadeOut(true), 2500);
    const fullTimer = setTimeout(() => removeNotification(id), 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(fullTimer);
    };
  }, [id, removeNotification]);

  const baseColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  }[type];

  return (
    <div
      className={`pointer-events-auto w-full rounded px-4 py-3 text-sm text-white shadow-md transition-all duration-300 ${baseColor} ${
        fadeOut ? 'animate-fade-out-up' : 'animate-fade-in-down'
      }`}>
      {message}
    </div>
  );
}

export default function NotificationContainer() {
  const { notifications } = useNotificationStore();

  return (
    <div className='pointer-events-none fixed top-[120px] left-1/2 z-50 flex w-full max-w-md -translate-x-1/2 flex-col items-center space-y-2 px-4'>
      {notifications.map((n) => (
        <AnimatedNotification key={n.id} {...n} type={n.type || 'info'} />
      ))}
    </div>
  );
}
