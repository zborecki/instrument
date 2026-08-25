import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import '@/css/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Instrument',
    template: '%s | Instrument'
  }
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body>
      {children}
    </body>
  </html>
);

export default RootLayout;
