import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from './context/Auth';

import { router } from './Router';

import './style.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: true,
      staleTime: 1000 * 60 * 1000,
      cacheTime: 1000 * 65 * 1000,
      refetchOnWindowFocus: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MantineProvider withNormalizeCSS withGlobalStyles>
          <NotificationsProvider limit={3} position='top-center'>
            <RouterProvider router={router} />
          </NotificationsProvider>
        </MantineProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
