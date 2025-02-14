import { FC, ReactNode } from "react";
import { DefaultTypography } from "../typography";
import { AuthFooter } from "../footer/authFooter";
import { Progress } from "../ui/progress";

interface IAuthLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  progress: number; 
}

export const AuthLayout: FC<IAuthLayoutProps> = ({
  title,
  description,
  children,
  progress, 
}) => {
  return (
    <>
      <div className="container lg:h-[90vh] mt-10">
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

        <div className="my-4">{children}</div>
      </div>
      <AuthFooter />
    </>
  );
};
