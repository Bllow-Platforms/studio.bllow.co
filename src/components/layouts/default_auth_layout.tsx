import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import { DefaultTypography } from '../typography';
import Image from 'next/image';

interface IDefaultAuthLayoutProps {
  title?: string;
  children?: ReactNode;
}

export const DefaultAuthLayout: NextPage<IDefaultAuthLayoutProps> = ({
  children,
  title = 'Log in, Level Up, Brewing up great content',
}) => {
  return (
    <div className="flex flex-col lg:flex-row  justify-between h-screen gap-2">
      <div className="w-full lg:w-[500px] h-full items-center flex justify-center">{children}</div>
      <div
        className="bg-primary h-full w-full lg:w-[879px] flex flex-col items-center
                justify-center "
      >       
        <DefaultTypography
          variant="h1"
          className="text-3xl lg:text-[35px] w-full lg:w-[600px] text-white justify-center"
        >
          {title}
        </DefaultTypography>

        <Image
          src={'/svgs/authImage.svg'}
          alt="Auth Images"
          width={'400'}
          height={'400'}
        />
      </div>
    </div>
  );
};
