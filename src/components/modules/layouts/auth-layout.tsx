import { FC, ReactNode } from 'react';
import { DefaultTypography } from '../shared/typography';
import { AuthFooter } from '../../footer/auth-footer';
import { Progress } from '../../ui/progress';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

interface IAuthLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  progress: number;
  showBackButton?: boolean;
  onBackClick?: () => void;
  allowSkip?: boolean;
  handleNext?: () => void;
}

export const AuthLayout: FC<IAuthLayoutProps> = ({
  title,
  description,
  children,
  progress,
  showBackButton,
  onBackClick,
  allowSkip = false,
  handleNext,
}) => {
  return (
    <>
      <div className="container h-100 my-4">
        <div className="w-full lg:w-[900px] mx-auto gap-2">
          <div className="w-full my-[3em] flex items-center gap-2">
            {showBackButton && (
              <h3 onClick={onBackClick} className="cursor-pointer">
                <ArrowLeft size={18} className="" />
              </h3>
            )}
            <Progress value={progress} className="transition-all duration-700" />

            {allowSkip && (
              <div
                className="text-primary flex items-center  cursor-pointer"
                onClick={handleNext}
              >
                <p className="text-sm">Skip</p>
                <ArrowRight />
              </div>
            )}
          </div>
          <div className="lg:w-[50%] mx-auto my-[2em]">
            <DefaultTypography
              variant="h2"
              className={`text-center mt-4 text-2xl lg:text-[37px] leading-10 ${plusJakartaSans.className} font-semibold`}
            >
              {title}
            </DefaultTypography>
            <p className="my-4 text-center text-gray-400 text-sm">{description}</p>
          </div>
        </div>

        <div className="flex flex-col gap-[2em] h-screen">
          <div className="w-full lg:w-[600px] mx-auto">{children}</div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 left-0 bg-white">
        <AuthFooter />
      </div>
    </>
  );
};
