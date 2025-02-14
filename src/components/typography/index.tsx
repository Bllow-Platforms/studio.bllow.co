import { FC, ReactNode, HTMLAttributes } from 'react';

interface IDefaultTypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
}

export const DefaultTypography: FC<IDefaultTypographyProps> = ({
  children,
  variant = 'h4',
  className = '',
  ...props
}) => {
  const Component = variant;

  return (
    <Component className={`typography ${className}`} {...props}>
      {children}
    </Component>
  );
};
