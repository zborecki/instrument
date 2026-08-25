import type { Metadata } from 'next';
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

const RootLayout = async ({ children }: PropsWithChildren) => {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
