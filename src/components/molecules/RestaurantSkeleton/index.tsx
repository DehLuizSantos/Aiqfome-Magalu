export default function RestaurantSkeleton() {
  return (
    <div className='relative top-[30px] space-y-4'>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className='flex animate-pulse items-start space-x-4 rounded-lg border p-4'>
          <div className='h-20 w-20 rounded-md bg-gray-300' />
          <div className='flex-1 space-y-2'>
            <div className='h-4 w-3/4 rounded bg-gray-300' />
            <div className='h-4 w-1/2 rounded bg-gray-200' />
            <div className='h-4 w-1/3 rounded bg-gray-100' />
          </div>
        </div>
      ))}
    </div>
  );
}
