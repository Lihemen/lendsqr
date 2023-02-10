import { useCallback, useState } from 'react';
import { IoMdFunnel } from 'react-icons/io';

import Pagination from './pagination';
import {
  get_nested_value,
  insert,
  isDeepEqual,
  useDebouncedEffect,
} from './utils';

import './datagrid.scss';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const DataGrid = ({ data, rows, headers, ...props }: DataGridProps<any[]>) => {
  // navigation
  const navigate = useNavigate();

  const [_internal, setInternal] = useState<typeof data>(data);
  const [selectedRows, setSelectedRows] = useState<typeof data>([]); // Data Selection

  // Pagination Controls
  const [perPage, setPerPage] = useState(rows); // Rows per page
  const [currentItems, setCurrentItems] = useState<typeof data>([]); // Current list displayed
  const [page, setPage] = useState<number>(1); // Current page
  const [itemsOffset, setItemsOffset] = useState<number>(0); // offset from index

  // Select current displayed rows
  const selectCurrent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    if (checked) {
      setSelectedRows(currentItems);
    } else {
      setSelectedRows([]);
    }
    // External Action Controller
    if (props.setExternalContent) {
      if (checked) {
        props.setExternalContent(currentItems);
      } else {
        props.setExternalContent([]);
      }
    }
  };

  // Select/Deselect a particular row
  const toggleRow = (row: ArrayElement<typeof data>) => {
    if (selectedRows.includes(row)) {
      setSelectedRows((prev) => prev.filter((el) => !isDeepEqual(el!, row!)));
    } else {
      setSelectedRows((prev) =>
        insert(
          prev,
          currentItems.findIndex((el) => isDeepEqual(el!, row!)),
          row
        )
      );
    }

    // External Action Controller
    if (props.setExternalContent) {
      if (selectedRows.includes(row)) {
        props.setExternalContent((prev) =>
          prev.filter((el) => !isDeepEqual(el!, row!))
        );
      } else {
        props.setExternalContent((prev) =>
          insert(
            prev,
            currentItems.findIndex((el) => isDeepEqual(el!, row!)),
            row
          )
        );
      }
    }
  };

  useDebouncedEffect(
    () => {
      // Handle Pagination on load
      const endOffset = itemsOffset + perPage;
      setCurrentItems(_internal.slice(itemsOffset, endOffset));
      setPage(Math.ceil(_internal.length / perPage));
    },
    [itemsOffset, perPage, _internal, data],
    50
  );

  console.log(headers);

  return (
    <div className='relative'>
      <div className='bg-white relative table pb-20'>
        <table className='overflow-auto w-full mb-10'>
          <thead className='table_head w-full'>
            <tr>
              {props.withCheck && (
                <th className='align-middle '>
                  <input
                    type='checkbox'
                    className='checkbox white'
                    checked={
                      selectedRows.length === currentItems.length &&
                      selectedRows.length !== 0
                    }
                    onChange={selectCurrent}
                  />
                </th>
              )}
              {headers.map((header) => (
                <th key={header.accessor} className='uppercase text-left'>
                  <span className='flex items-center gap-4 cursor-default whitespace-nowrap p-6'>
                    {header.name} <IoMdFunnel size={18} />
                  </span>
                </th>
              ))}
              {props.ActionComponent && <th></th>}
            </tr>
          </thead>
          <tbody className='table_body'>
            {currentItems.length < 1 ? (
              <p className='absolute w-full text-center left-1/2 -translate-x-1/2 pt-10 capitalize'>
                No Records Found!!!
              </p>
            ) : (
              currentItems.map((row, index) => (
                <tr
                  key={index}
                  onClick={
                    props.withNavigation && props.navigationProps
                      ? () =>
                          navigate(
                            `/${props.navigationProps?.baseRoute}/${
                              row[props.navigationProps?.accessor!]
                            }`
                          )
                      : undefined
                  }>
                  {props.withCheck && (
                    <td onClick={(e) => e.stopPropagation()}>
                      <input
                        type='checkbox'
                        className='mr-2 mt-1 border-0 w-6 h-6 shadow-md checkbox'
                        checked={
                          selectedRows.findIndex((el) =>
                            isDeepEqual(el, row)
                          ) >= 0
                        }
                        onChange={() => toggleRow(row)}
                      />
                    </td>
                  )}

                  {Object.keys(row)
                    .sort((a, b) => {
                      const headerKeys = headers.map(
                        (header) => header.accessor
                      );

                      return headerKeys.indexOf(a) - headerKeys.indexOf(b);
                    })
                    .map((_, i) => {
                      const header = headers[i];

                      const secondary_data = header?.secondary_key
                        ? get_nested_value(row, header?.secondary_key)
                        : '';

                      const data =
                        get_nested_value(row, header?.accessor) ?? '--------';

                      return (
                        <React.Fragment key={i}>
                          {header && (
                            <td key={i} className='p-6'>
                              {header?.row
                                ? header.row(data, secondary_data)
                                : data}
                            </td>
                          )}
                        </React.Fragment>
                      );
                    })}
                  {props.ActionComponent && (
                    <td
                      onClick={(e) => e.stopPropagation()}
                      className='relative pr-4 cursor-pointer'>
                      <props.ActionComponent data={row} />
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={page}
        setItemsOffset={setItemsOffset}
        dataLength={data.length}
        perPage={perPage}
        setPerPage={setPerPage}
      />
    </div>
  );
};

export default DataGrid;
