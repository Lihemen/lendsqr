import { fetchSingleUser, fetchUsers } from '../api';

export const get_all_users = () => ({
  queryKey: ['users'],
  queryFn: async () => await fetchUsers(),
});

export const get_single_user = (id: number) => ({
  queryKey: ['users', id],
  queryFn: async () => await fetchSingleUser(id),
});
