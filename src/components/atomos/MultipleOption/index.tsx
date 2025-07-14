type MultipleOptionInterface = {
  label: string;
};

export default function MultipleOption({ label }: MultipleOptionInterface) {
  return (
    <div className='mt-4 flex items-center gap-2'>
      <input className='h-4 w-4' type='checkbox' />
      <label htmlFor=''>{label}</label>
    </div>
  );
}
