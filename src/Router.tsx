import { createBrowserRouter } from 'react-router-dom';
import App from './App';

// Authentication Routes
import { Login } from './pages/auth';

// Application Routes
import { UserDetails, UsersList } from './pages/users_module';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'users',
        children: [
          {
            index: true,
            element: <UsersList />,
          },
          {
            path: ':id',
            element: <UserDetails />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export { router };
