import { Modal } from '@mantine/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { DateInput, Select, TextInput } from '..';

type SearchFormProps = {
  show: boolean;
  close: () => void;
  setFilterObj: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
  headers: Header<any[]>[];
  data: any[];
};

const SearchForm = ({
  show,
  close,
  setFilterObj,
  headers,
  data,
}: SearchFormProps) => {
  return (
    <div className={`modal rounded p-4 ${show && 'show'}`} onClick={close}>
      {' '}
      <Formik
        initialValues={headers.reduce(
          (a, b) => ({ ...a, [b.accessor]: '' }),
          {}
        )}
        onSubmit={() => {}}>
        {({ resetForm, values }) => (
          <Form onClick={(e) => e.stopPropagation()}>
            <div className='grid cols-1 gap-2'>
              {headers.map((header) => (
                <React.Fragment key={header.accessor}>
                  {header.searchType === 'select' ? (
                    <Select
                      id={header.accessor}
                      name={header.accessor}
                      label={header.name}
                      data={[
                        ...new Set(data.map((el) => el[header.accessor])),
                      ].map((el) => ({ label: el, value: el }))}
                      placeholder='Select'
                    />
                  ) : header.searchType === 'date' ? (
                    <DateInput />
                  ) : (
                    <TextInput
                      name={header.accessor}
                      id={header.accessor}
                      type='text'
                      label={header.name}
                      placeholder={header.name}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className='grid cols-2 gap-2 mt-4'>
              <button
                className='px-4 p-3 rounded border border-1 border-gray'
                onClick={() => resetForm()}
                type='button'>
                Reset
              </button>
              <button
                className='px-4 p-3 rounded border border-1 border-primary bg-primary text-white'
                type='button'
                onClick={() => {
                  setFilterObj(values);
                  close();
                }}>
                Filter
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
