import { render } from '@testing-library/react';
import { describe, it, vi, Mock, beforeEach, afterEach, expect } from 'vitest';
import UsersList from '.';
import { useUsers } from '../../../../hooks';

// Solves Typescript error
const mockeduseUsers = useUsers as Mock<any>;

// Mock the module
vi.mock('../../../../hooks/useUsers');

import {
  renderWithClient,
  createFetchResponse,
} from '../../../../__tests__/utils';

describe('UsersList', () => {
  beforeEach(() => {
    mockeduseUsers.mockImplementation(() => ({ isLoading: true }));
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Renders without crashing', () => render(<UsersList />));

  it('Gets the label on the tiles', () => {
    const { getByText } = render(<UsersList />);

    // Calls the query hook on mount
    expect(useUsers).toHaveBeenCalledOnce();

    // Get the label on the tiles
    getByText(/users with savings/i);
  });

  // Show the loading indicator from react-query
  it('Shows loading indicator', () => {
    const { getByAltText } = render(<UsersList />);

    getByAltText(/Loading.../i);
  });

  it('Displays Table', () => {
    const mockedData: User[] = [
      {
        createdAt: new Date('2089-05-21T04:15:40.501Z'),
        orgName: 'accusamus-minima-repudiandae',
        userName: 'Jaycee15',
        email: 'Veronica_Shanahan93@gmail.com',
        phoneNumber: '(543) 727-0652',
        profile: {
          firstName: 'Mia',
          lastName: 'Padberg',
          phoneNumber: '987-749-2057 x6370',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/726.jpg',
          gender: 'Male',
          bvn: '374229067',
          address: 'Meagan Islands',
          currency: 'NGN',
        },
        guarantor: {
          firstName: 'Johnathon',
          lastName: 'Hane',
          phoneNumber: '(573) 413-3844 x9178',
          gender: 'Male',
          address: 'Goyette Trail',
        },
        accountBalance: '800.80',
        accountNumber: 'TEJOGWC1007',
        socials: {
          facebook: '@lendsqr',
          instagram: '@lendsqr',
          twitter: '@lendsqr',
        },
        education: {
          level: 'Bsc',
          employmentStatus: 'Employed',
          sector: 'FinTech',
          duration: '2 Years',
          officeEmail: 'Kitty.Swaniawski28@gmail.com',
          monthlyIncome: ['616.57', '295.72'],
          loanRepayment: '818.12',
        },
        id: '2',
        status: 'blacklisted',
      },
    ];

    mockeduseUsers.mockImplementation(() => ({
      isLoading: false,
      isError: false,
      data: mockedData,
    }));

    const { queryByAltText } = renderWithClient(<UsersList />);

    // We don't want the loading flag to be displayed
    expect(queryByAltText(/Loading.../i)).toBeFalsy();
  });
});
