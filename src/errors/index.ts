export const NetworkError = () => {
  throw new Response('', {
    status: 500,
    statusText: 'Network error',
  });
};

export const OperationError = () => {
  throw new Response('', {
    status: 400,
    statusText: 'Ooops, seems like an error occurred',
  });
};

export const DataFetchingError = () => {
  throw new Response('', {
    status: 400,
    statusText: 'Error fetching data',
  });
};
