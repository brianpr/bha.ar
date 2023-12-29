import { AppProps } from 'next/app';
import { Inter as FontSans } from 'next/font/google';

import '@/styles/global.css';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>{`
      html {
        font-family: ${fontSans.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
  </>
);

export default MyApp;
