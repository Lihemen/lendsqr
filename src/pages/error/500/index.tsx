import { useRouteError } from 'react-router-dom';

const Error500 = () => {
  const error = useRouteError() as Response;
  return (
    <section style={{ height: '100vmin' }}>
      <div className='flex flex-col text-center justify-center items-center leading-10 gap-10 w-full h-full'>
        <h1 className='text-6xl text-primary'>{error.status} </h1>
        <h3 className='text-black text-2xl'>Internal Server Error</h3>
        <p className='text-black'>{error.statusText}</p>
        <button
          className='bg-primary w-max rounded p-4 px-6 text-white btn transition'
          onClick={() => window.location.reload()}>
          Reload
        </button>
      </div>
    </section>
  );
};

export default Error500;
