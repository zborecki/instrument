import { PropsWithChildren } from 'react';

import { getSettings } from '@/requests/settings';

const MainLayout = async ({ children }: PropsWithChildren) => {
  const settings = await getSettings();

  console.log(settings);

  return (
    <>
      {children}
    </>
  );
};

export default MainLayout;
