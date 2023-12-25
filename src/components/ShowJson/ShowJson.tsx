
export function ShowJson({watch}: any) {
  return (
    <div className='flex min-h-[90%] w-2/3 items-center justify-center rounded-3xl bg-cyan-800 p-20 text-teal-50'>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </div>
  );
}
