import { FC } from 'react';
import { SecondaryLogo } from '../../../public/svgs/logo';
import Link from 'next/link';
interface IAuthFooterProps {}

export const AuthFooter: FC<IAuthFooterProps> = props => {
  return (
    <div className="flex items-center mt-[4em] lg:mt-0 border-t-2 py-6 justify-between ">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <SecondaryLogo />
        </div>
        <div>
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link href={'/auth/signin'} className="text-background font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
