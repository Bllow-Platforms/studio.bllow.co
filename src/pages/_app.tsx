import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Toaster } from 'sonner';

export default function App({ Component, pageProps }: AppProps) {
  const query = new QueryClient();
  return (
    <QueryClientProvider client={query}>
      <Toaster
        position="top-center"
        richColors={true}
        offset={20}
        swipeDirections={['left', 'right']}
      />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
