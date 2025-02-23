import { PrimaryProvider } from '@/provider/index-provider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'sonner';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimaryProvider>
      <Toaster
        position="top-center"
        richColors={true}
        offset={20}
        swipeDirections={['left', 'right']}
      />
      <Component {...pageProps} />
    </PrimaryProvider>
  );
}
