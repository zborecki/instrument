import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import '@/css/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Instrument',
    template: '%s | Instrument'
  }
};

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500']
});

const RootLayout = async ({ children }: PropsWithChildren) => {
  const locale = await getLocale();

  return (
    <html className={dmSans.className} lang={locale}>
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
