import { FC, ReactNode } from 'react';
import { DefaultTypography } from '../typography';
import { AuthFooter } from '../footer/authFooter';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import localFont from 'next/font/local';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

interface IAuthLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  progress: number;
  note?: string;
  buttonText: string;
  onButtonClick: () => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
  isButtonDisabled?: boolean;
}

export const AuthLayout: FC<IAuthLayoutProps> = ({
  title,
  description,
  children,
  progress,
  note,
  buttonText,
  onButtonClick,
  showBackButton,
  onBackClick,
  isButtonDisabled = false,
}) => {

  return (
    <>
      <div className="container h-screen  my-8 ">
        <div className="w-full lg:w-[850px] mx-auto">
          <Progress
            value={progress}
            className="mb-[2em] transition-all duration-700"
          />
          <div className="lg:w-[50%] mx-auto">
            <DefaultTypography 
              variant="h2" 
              className={`text-center mt-4 text-2xl lg:text-[37px] leading-10 ${plusJakartaSans.className} font-semibold`}
            >
              {title}
            </DefaultTypography>
            <p className="my-2 text-center text-gray-400 text-sm">{description}</p>
          </div>
        </div>

        <div className="flex flex-col gap-[2em] mt-[3em]">
          <div className=" w-full lg:w-[600px] mx-auto ">{children}</div>

          {note && (
            <div>
              <p className="text-center w-full lg:w-[400px] mx-auto text-gray-400 my-4 text-lg font-light">
                {note}
              </p>
            </div>
          )}

          <div className="flex items-center justify-center gap-4 mt-8">
            {/* {showBackButton && (
              <Button
                variant="outline"
                onClick={onBackClick}
                className="px-8 hover:bg-white/10"
              >
                Back
              </Button>
            )} */}
            <Button
              onClick={onButtonClick}
              className="px-[55px]"
              disabled={isButtonDisabled}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};
