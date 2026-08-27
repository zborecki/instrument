import { Metadata } from 'next';

import PageHeader from '@/features/PageHeader';
import { getPage } from '@/requests/pages';
import { IPageProps } from '@/types/props/pages';
import { omitEmptyValues } from '@/utils/omitEmptyValues';

export async function generateMetadata({ params }: IPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPage(slug);

  return omitEmptyValues(page.metadata ?? {});
}

const Page = async ({ params }: IPageProps) => {
  const { slug } = await params;
  const page = await getPage(slug);

  console.log(page);

  return (
    <main>
      <PageHeader background='black' text='white' />
    </main>
  );
};

export default Page;
