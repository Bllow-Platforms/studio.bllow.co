import { FC, ReactNode } from "react";
import { DefaultTypography } from "../typography";
import { AuthFooter } from "../footer/authFooter";
import { Progress } from "../ui/progress";

interface IAuthLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  progress: number; 
  note: string;
}

export const AuthLayout: FC<IAuthLayoutProps> = ({
  title,
  description,
  children,
  progress, 
  note
}) => {
  return (
    <>
      <div className="container lg:h-[90vh] lg:w-[600px] mx-auto mt-10">
        <div className="w-full lg:w-[400px] mx-auto ">
          <Progress 
            value={progress} 
            className="mb-[2em] transition-all duration-700"
          />
          <DefaultTypography
            variant="h2"
            className="text-center mt-4 text-4xl"
          >
            {title}
          </DefaultTypography>
          <p className="my-2 text-center text-gray-400">{description}</p>
        </div>

        <div className="my-[5em]">{children}</div>

        <div className="mt-4">
          <p className="text-center text-gray-400 my-4">{note}</p>
        </div>


      </div>
      <AuthFooter />
    </>
  );
};
