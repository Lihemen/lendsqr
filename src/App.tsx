import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar, Sidebar } from './components';
import { useAuthCtx } from './context/Auth';

function App() {
  const { isAuthenticated } = useAuthCtx();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate('/login');
    }
  }, [isAuthenticated]);
  return (
    <>
      <Navbar key='navbar' />
      <Sidebar key='sidebar' />
      <AnimatePresence mode='wait'>
        <main className='main text-gray' key='main'>
          <Outlet />
        </main>
      </AnimatePresence>
    </>
  );
}

export default App;
