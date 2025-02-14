import { FC } from 'react';
interface IAuthFooterProps {}

export const AuthFooter: FC<IAuthFooterProps> = props => {
  return (
    <div className="flex items-center mt-[3em] lg:mt-0 border-t-4 py-8 justify-between container">
      <div className="logo"></div>

      <div>
        <p>
          Already have an account?{' '}
          <span className="text-background font-semibold">Sign In</span>{' '}
        </p>
      </div>
    </div>
  );
};
