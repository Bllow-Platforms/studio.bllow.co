import { ReactNode, FC } from 'react';

interface IContainerLayoutProps {
  children: ReactNode;
}

export const HeroContainer: FC<IContainerLayoutProps> = ({ children }) => {
  return (
    <div className=" w-full h-screen bg-background ">
      <div className="container text-white">{children}</div>
    </div>
  );
};

const ContainerLayout: FC<IContainerLayoutProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default ContainerLayout;
