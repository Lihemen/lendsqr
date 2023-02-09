export const fetchUsers = async (): Promise<User[]> => {
  const resp = await fetch(
    'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
  );
  return resp.json();
};

export const fetchSingleUser = async (id: number): Promise<User | null> => {
  const resp = await fetch(
    `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
  );
  return resp.json();
};
