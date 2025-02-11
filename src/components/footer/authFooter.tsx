import { FC } from "react";
interface IAuthFooterProps {}

export const AuthFooter: FC<IAuthFooterProps> = (props) => {
  return (
    <div className="flex items-center justify-between container">
      <div className="logo"></div>

      <div>
        <p>
          Already have an account?{" "}
          <span className="text-background font-semibold">Sign In</span>{" "}
        </p>
      </div>
    </div>
  );
};
