import './App.css';
import { useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';
import { useForm, useFieldArray } from 'react-hook-form';
import { FormItem } from './components/FormItem/FormItem';

interface FormProps {
  form: Form[];
}

interface Form {
  key: string;
  name: string;
  id?: string;
  lastName: string;
  isActive: boolean;
}

const DEFAULT_VALUE = [
  {
    key: '1',
    name: '',
    lastName: '',
    isActive: false
  },
  {
    key: '2',
    name: '',
    lastName: '',
    isActive: false
  },
  {
    key: '3',
    name: '',
    lastName: '',
    isActive: false
  },
  {
    key: '4',
    name: '',
    lastName: '',
    isActive: false
  }
];

export function App() {
  const { handleSubmit, control, watch, register, setValue, formState } =
    useForm<FormProps>({
      mode: 'onBlur',
      defaultValues: {
        form: DEFAULT_VALUE
      }
    });

  const { fields, append } = useFieldArray({
    control,
    name: 'form'
  });

  const [forms, setForms] = useState<Form[]>(fields);

  const onSubmit = (data: FormProps) => {
    console.log(data);
  };

  const deleteForm = (key: string) => {
    const value = forms.filter((elem) => key !== elem.key);
    setValue('form', value);
  };

  const addForm = () => {
    const newField = {
      key: (forms.length + 1).toString(),
      name: '',
      lastName: '',
      isActive: false
    };
    append(newField);
  };

  useEffect(() => {
    if (fields) {
      setForms(fields);
    }
  }, [fields]);

  return (
    <div className='flex min-h-max min-w-max justify-between '>
      <div className='flex min-h-max w-1/2 items-center justify-center bg-cyan-800 p-20'>
        <form
          className='flex flex-col items-center'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Reorder.Group
            className='flex flex-col items-center gap-5'
            values={forms}
            onReorder={setForms}
          >
            {forms.map((item, index) => (
              <Reorder.Item
                key={item.id}
                value={item}
              >
                <FormItem
                  deleteForm={() => deleteForm(item.key)}
                  index={index}
                  register={register}
                  formState={formState}
                />
              </Reorder.Item>
            ))}
          </Reorder.Group>

          <input
            type='submit'
            className='mt-20 h-[40px] w-2/3 cursor-pointer rounded-3xl border-2 border-teal-50 bg-teal-50 font-bold text-cyan-800 hover:bg-cyan-800 hover:text-teal-50'
          />

          <button
            className='fixed left-10 top-10 h-[40px] w-[120px] cursor-pointer rounded-3xl border-2 border-teal-50 bg-teal-50 font-bold text-cyan-800 hover:bg-cyan-800 hover:text-teal-50'
            onClick={addForm}
          >
            Add form
          </button>
        </form>
      </div>

      <div className='flex w-1/2 items-center justify-center  bg-teal-50 p-20'>
        <div className='flex min-h-[90%] w-2/3 items-center justify-center rounded-3xl bg-cyan-800 p-20 text-teal-50'>
          <pre>{JSON.stringify(watch('form'), null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
