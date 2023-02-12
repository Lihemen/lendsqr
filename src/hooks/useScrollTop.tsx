import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollTop = () => {
  const { pathname, search } = useLocation();
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);
};

export default useScrollTop;
