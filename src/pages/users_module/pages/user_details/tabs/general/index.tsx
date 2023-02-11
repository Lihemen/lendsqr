import React from 'react';
import { commaFormatter } from '../../../../../../utils/formatter';
import { useUserCtx } from '../../context';

const General = () => {
  const { user } = useUserCtx();
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-6'>
        <h3 className='font-normal capitalize text-dark-blue text-base font-semibold'>
          Personal Information
        </h3>
        <div className='grid cols-2 cols-3-md cols-4-lg cols-5-xl gap-8 border-1 border-b pb-8'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>FULL NAME</p>
            <p className='font-semibold'>
              {user.profile.firstName} {user.profile.lastName}{' '}
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>PHONE NUMBER</p>
            <p className='font-semibold'>{user.phoneNumber}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>EMAIL ADDRESS</p>
            <p className='font-semibold lower'>{user.email}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>BVN</p>
            <p className='font-semibold'>{user.profile.bvn}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>GENDER</p>
            <p className='font-semibold'>{user.profile.gender}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>MARITAL STATUS</p>
            <p className='font-semibold'>Single</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>CHILDREN</p>
            <p className='font-semibold'>None</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>Type of Residence</p>
            <p className='font-semibold'>Parent's Apartment</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <h3 className='font-normal capitalize text-dark-blue text-base font-semibold'>
          Education and Employment
        </h3>
        <div className='grid cols-2 cols-3-md cols-4-lg gap-8 border-1 border-b pb-8'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>LEVEL OF EDUCTION</p>
            <p className='font-semibold'>{user.education.level}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>EMPLOYMENT STATUS</p>
            <p className='font-semibold'>{user.education.employmentStatus}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>SECTOR OF EMPLOYMENT</p>
            <p className='font-semibold'>{user.education.sector}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>DURATION OF EMPLOYMENT</p>
            <p className='font-semibold'>{user.education.duration}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>OFFICE EMAIL</p>
            <p className='font-semibold lower'>{user.education.officeEmail}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>MONTHLY INCOME</p>
            <p className='font-semibold'>
              &#8358;{commaFormatter(user.education.monthlyIncome[0], 2)} -{' '}
              &#8358;{commaFormatter(user.education.monthlyIncome[1], 2)}
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>LOAN REPAYMENT</p>
            <p className='font-semibold'>
              {commaFormatter(user.education.loanRepayment, 2)}{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <h3 className='font-normal capitalize text-dark-blue text-base font-semibold'>
          Socials
        </h3>
        <div className='grid cols-2 cols-3-md cols-4-lg cols-5-xl gap-8 border-1 border-b pb-8'>
          {Object.keys(user.socials).map((key) => (
            <div className='flex flex-col gap-1'>
              <p className='text-sm uppercase'>{key}</p>
              <p className='font-semibold'>
                {user.socials[key as keyof Socials]}{' '}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <h3 className='font-normal capitalize text-dark-blue text-base font-semibold'>
          Guarantor
        </h3>
        <div className='grid cols-2 cols-3-md cols-4-lg cols-5-xl gap-8'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>FULL NAME</p>
            <p className='font-semibold'>
              {user.guarantor.firstName} {user.guarantor.lastName}{' '}
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>PHONE NUMBER</p>
            <p className='font-semibold'>{user.guarantor.phoneNumber}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>EMAIL ADDRESS</p>
            {/* No email in response */}
            <p className='font-semibold lower'>{user.email}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm uppercase'>BVN</p>
            {/* No relationship in response */}
            <p className='font-semibold'>Sister</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
