import type { PageResponseAPI } from '@instrument/types/api/pages';
import { NextResponse } from 'next/server';

export async function GET() {
  const PAGE_MOCKUP: PageResponseAPI = {
    data: {
      blocks: [
        {
          colors: {
            background: 'pink',
            text: 'gray'
          },
          title: 'CosmoFashion',
          description: 'Empowered CosmoFashion with a robust e-commerce solution, leading to significant sales growth and customer retention.',
          id: 'block-1',
          keywords: ['Brand identity', 'UX'],
          links: [
            {
              id: 'link-1',
              href: '/',
              name: 'Learn more'
            },
            {
              id: 'link-2',
              href: '/',
              name: 'Demo'
            }
          ],
          type: 'PAGE_HEADER'
        }
      ],
      metadata: {
        description: null,
        keywords: null,
        title: 'Home'
      }
    }
  };

  return NextResponse.json(PAGE_MOCKUP, { status: 200 });
}
