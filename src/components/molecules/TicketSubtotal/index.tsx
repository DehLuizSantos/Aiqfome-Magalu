'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ProductTicketInterface } from '@/interfaces/ticket';
import useNotificationStore from '@/stores/notificationStore';
import useProductsStore from '@/stores/productStore';
import { formatCurrency } from '@/utils/formats';

export default function TicketSubtotal() {
  const { total, setProducts } = useProductsStore();
  const router = useRouter();

  const { addNotification } = useNotificationStore();
  const productsStore = sessionStorage.getItem('produtos');
  const products = JSON.parse(productsStore!);

  const verificationPayment = () => {
    const hasZeroQuantity = products?.some((product: ProductTicketInterface) => product.quantity === 0);
    if (hasZeroQuantity) {
      addNotification('Tem que haver pelo menos 1 produto selecionado em cada pedido', 'error');
    } else {
      addNotification('Pedido realizado com sucesso!', 'success');
      sessionStorage.setItem('produtos', '[]');
      setProducts([]);
      router.push('/');
    }
  };

  return (
    <div className='fixed right-0 bottom-0 left-0 z-10 flex h-[120px] w-full items-center justify-between bg-white px-6 py-4'>
      <div className=''>
        <p className='text-sm font-bold text-neutral-900'>subtotal</p>
        <h5 className='text-xl font-extrabold text-purple-500'>{formatCurrency(total)}</h5>
      </div>
      <button
        className='h-[48px] w-[200px] rounded-lg bg-purple-500 text-sm font-bold text-white'
        onClick={verificationPayment}>
        ir para pagamento
      </button>
    </div>
  );
}
