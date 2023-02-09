type User = {
  id: string;
  createdAt: Date;
  userName: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  profile: Profile;
  guarantor: Omit<Profile, 'avatar' | 'bvn' | 'currency'>;
  accountBalance: string;
  accountNumber: string;
  socials: Socials;
  education: Education;
};

type Socials = {
  facebook: string;
  instagram: string;
  twitter: string;
};

type Education = {
  level: 'Bsc' | 'SSCE' | string; // remove the string to restrict when all levels are specified
  employementStatus: 'Employed' | 'UnEmployed';
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: [string, string];
  loanRepayment: string;
};

type Profile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: 'NGN' | 'USD' | 'EUR' | 'GBP';
};
