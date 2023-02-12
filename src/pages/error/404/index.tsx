import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <section style={{ height: '100vmin' }}>
      <div className='flex flex-col text-center justify-center items-center leading-10 gap-10 w-full h-full'>
        <h1 className='text-6xl text-primary'>404</h1>
        <h3 className='text-black text-2xl'>Oops! Page not Found</h3>
        <p className='text-black'>
          Sorry but the page you are looking for is not found. Please, make sure
          you have typed the correct URL
        </p>
        <div className='flex items-center gap-4'>
          <button
            className='bg-primary w-max rounded p-4 px-6 text-white btn transition'
            onClick={() => navigate('/', { replace: true })}>
            Go Home
          </button>
          <button
            className='bg-black w-max rounded p-4 px-6 text-white btn transition'
            onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error404;
