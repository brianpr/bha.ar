import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'bha.ar',
  description: 'Powered by banhaia.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <meta charSet="UTF-8" key="charset" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon.ico`}
      />

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XJMZCEWND1"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-XJMZCEWND1', {
                      page_path: window.location.pathname,
                      });
                    `,
        }}
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
