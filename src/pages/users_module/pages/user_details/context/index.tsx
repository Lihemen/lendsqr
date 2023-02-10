import React, { useContext, createContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { get_all_users } from '../../../../../queries';
import { Loader } from '../../../../../components';
import { DataFetchingError, OperationError } from '../../../../../errors';

type UserCtxProps = {
  user: User;
  documents: [];
  bank_details: [];
  loans: [];
  savings: [];
  settings: {};
};

const UserCtx = createContext<UserCtxProps | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery(get_all_users());

  if (isLoading) return <Loader />;

  if (isError) return DataFetchingError();

  const user = data && data.filter((user) => user.id === id);

  if (!user || user.length < 1) return OperationError();

  return (
    <UserCtx.Provider
      key={id}
      value={{
        user: user[0],
        bank_details: [],
        documents: [],
        loans: [],
        savings: [],
        settings: {},
      }}>
      {children}
    </UserCtx.Provider>
  );
};

const useUserCtx = () => {
  const currentUserCtx = useContext(UserCtx);

  if (!currentUserCtx)
    throw new Response('', {
      status: 500,
      statusText: 'useUserCtx has to be used within <UserCtx.Provider>',
    });

  return currentUserCtx;
};

export { UserProvider, useUserCtx };
