import { FC } from 'react';
import { SecondaryLogo } from '../../../public/svgs/logo';
interface IAuthFooterProps {}

export const AuthFooter: FC<IAuthFooterProps> = props => {
  return (
    <div className="flex items-center mt-[3em] lg:mt-0 border-t-2 py-8 justify-between ">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <SecondaryLogo />
        </div>
        <div>
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <span className="text-background font-semibold">Sign In</span>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
