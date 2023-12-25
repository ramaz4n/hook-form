export function FormItem({
  index,
  daleteForm,
  register,
  formState
}: any) {
  return (
    <div className='0 relative flex w-[320px] cursor-pointer flex-col items-center gap-5 rounded-3xl border-2 border-teal-50 p-5 text-cyan-800'>
      <span
        onClick={daleteForm}
        className='absolute right-2 top-0.5 p-1 text-teal-50 hover:text-red-400'
      >
        &times;
      </span>

      <label className='relative flex w-[80%] flex-col'>
        <input
          className='rounded-md border-0 p-0.5 pl-2 text-sm outline-0 '
          placeholder={'Имя'}
          {...register(`form.${index}.name`, {
            required: { value: true, message: 'Введите имя' }
          })}
        />
        {formState.errors.form && (
          <span className='lest absolute top-6 text-xs text-red-600'>
            {formState.errors.form[index]?.name?.message}
          </span>
        )}
      </label>

      <label className='relative flex w-[80%] flex-col'>
        <input
          className='rounded-md border-0 p-0.5 pl-2 text-sm outline-0 '
          placeholder={'Фамилия'}
          {...register(`form.${index}.lastName`, {
            required: { value: true, message: 'Введите фамилию' }
          })}
        />
        {formState.errors.form && (
          <span className='lest absolute top-6 text-xs text-red-600'>
            {formState.errors.form[index]?.lastName?.message}
          </span>
        )}
      </label>

      <label className='flex flex-row items-center justify-center gap-x-2.5 text-teal-50'>
        <span>tap on this</span>
        <span className='mt-1'> &#8658; </span>
        <input
          className='h-[20px] w-[20px]'
          type={'checkbox'}
          {...register(`form.${index}.isActive`)}
        />
        {formState.errors.form && (
          <span>{formState.errors.form[index]?.isActive?.message}</span>
        )}
      </label>
    </div>
  );
}
