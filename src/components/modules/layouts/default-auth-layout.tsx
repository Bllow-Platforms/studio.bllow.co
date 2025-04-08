import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import { DefaultTypography } from '../shared/typography';
import Image from 'next/image';

interface IDefaultAuthLayoutProps {
  title?: string;
  children: ReactNode;
  note?: string;
  className?: string;
}

export const DefaultAuthLayout: NextPage<IDefaultAuthLayoutProps> = ({
  children,
  note,
  title,
}) => {
  const HEADER = 'Log in, Level Up, Brewing up great content';
  return (
    <div className="flex flex-col lg:flex-row justify-between h-screen overflow-hidden">
      <div className="w-full lg:w-[550px] mx-auto h-full overflow-y-auto">
        <div className="flex justify-center p-4 min-h-full">
          <div className="mt-[6em]">
            <div className="text-left mb-10 flex flex-col gap-2 lg:w-[420px]">
              <DefaultTypography variant="h4" className="text-3xl">
                {title}
              </DefaultTypography>
              <p className="text-gray-400 text-sm">{note}</p>
            </div>
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex bg-gradient-to-b from-[#07041e] to-[#3B3399] h-screen flex-1 flex-col items-center justify-center p-12 relative">
        <div className="max-w-[800px] flex flex-col  space-y-4 ">
          <div className="w-full">
            <DefaultTypography
              variant="h1"
              className="text-[60px] text-white font-[300] leading-[65px] lg:w-[638px]"
            >
              {HEADER}
            </DefaultTypography>
          </div>

          <div className="w-full h-[500px]  ">
            <Image
              src="/svgs/authImage.svg"
              alt="Authentication illustration"
              width={500}
              height={0}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
