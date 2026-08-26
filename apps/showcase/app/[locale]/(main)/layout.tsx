import { PropsWithChildren } from 'react';

import Header from '@/features/header';
import { getSettings } from '@/requests/settings';

const MainLayout = async ({ children }: PropsWithChildren) => {
  const settings = await getSettings();

  console.log(settings);

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
