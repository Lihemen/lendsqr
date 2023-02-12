import { useQuery } from 'react-query';
import { get_all_users } from '../queries';

const useUsers = () => {
  return useQuery<User[]>(get_all_users());
};

export default useUsers;
