import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components';
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
      <Navigation key='navbar' />
      <AnimatePresence mode='wait'>
        <div className='main text-gray' key='main'>
          <Outlet />
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
