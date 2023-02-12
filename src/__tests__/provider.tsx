import { RouterProvider } from 'react-router-dom';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              // ✅ turns retries off
              retry: false,
            },
          },
        })
      }>
      {children}
    </QueryClientProvider>
  );
};

export default Container;
