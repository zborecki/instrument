import { getTranslations } from 'next-intl/server';

const Home = async () => {
  const t = await getTranslations();

  return (
    <main>{t('common.hello_world')}</main>
  );
};

export default Home;
