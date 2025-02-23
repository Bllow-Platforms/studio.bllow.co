import { FC, ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Toaster } from 'sonner';

interface IPrimaryProviderProps {
  children: ReactNode;
}

export const PrimaryProvider: FC<IPrimaryProviderProps> = ({ children }) => {
  const query = new QueryClient();
  return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
};
