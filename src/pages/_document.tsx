/* eslint-disable import/extensions */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from 'next/document';

// import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';

import { AppConfig } from '../utils/AppConfig';

// export const fontSans = FontSans({
//   subsets: ['latin'],
//   variable: '--font-sans',
// });

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <script src="https://www.googletagmanager.com/gtag/js?id=G-XJMZCEWND1"></script>

          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-XJMZCEWND1');

          `,
            }}
          />
        </Head>
        <body
          className={cn('min-h-screen bg-background font-sans antialiased')}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
