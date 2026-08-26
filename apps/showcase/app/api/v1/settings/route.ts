import type { SettingsResponseAPI } from '@instrument/types/api/settings';
import { NextResponse } from 'next/server';

export async function GET() {
  const SETTINGS_MOCKUP: SettingsResponseAPI = {
    data: {
      logo: {
        alt: '',
        src: 'https://dummyimage.com/210x48/8d7fb3/1f1f21.png',
        id: 'image-1'
      }
    }
  };

  return NextResponse.json(SETTINGS_MOCKUP, { status: 200 });
}
