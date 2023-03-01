import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Login from '@/components/Login';

export default function App({ Component, pageProps:{ session, ...pageProps} }: AppProps) {
  return <SessionProvider session={session}>
    {!session ? <Login /> : <Component {...pageProps} />}
  </SessionProvider>
}
