import React, { useContext, createContext } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../../../components';
import { DataFetchingError, OperationError } from '../../../../../errors';
import { useUsers } from '../../../../../hooks';

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
  const { data, isError, isLoading } = useUsers();

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
