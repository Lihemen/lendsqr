import { showNotification } from '@mantine/notifications';

import { FiCheckCircle } from 'react-icons/fi';
import { BiErrorAlt } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';

const toast = (id: 'success' | 'error' | 'warning', message: string) => {
  const borderColor =
    id === 'success'
      ? ' #39cdcc'
      : id === 'error'
      ? 'rgb(254, 31, 17)'
      : 'rgb(250, 232, 76)';
  const icon =
    id === 'success' ? (
      <FiCheckCircle size={24} />
    ) : id === 'error' ? (
      <BiErrorAlt size={24} />
    ) : (
      <BsInfoCircle size={24} />
    );
  return showNotification({
    autoClose: 3000,
    message: message,
    icon,
    styles: {
      root: {
        borderRadius: '5px',
        backgroundColor: '#fff',
        border: `1px solid ${borderColor}`,
        padding: '10px ',
        position: 'relative',
      },
      body: { padding: '10px 10px 10px 0' },
      closeButton: {
        backgroundColor: 'unset',
        transform: 'scale(1.25)',
        transition: 'all',
        transitionDuration: '150ms',
      },
      icon: {
        backgroundColor: '#fff !important',
        margin: '0 2px',
        width: '30px',
        height: '30px',
      },
    },
  });
};

export default toast;
