import { draftMode } from 'next/headers';
import { NextResponse } from 'next/server';

import { GetCurrentPageQuery } from '@/graphql-types';
import { fetchData } from 'utils/fetchData';

import { GET_CURRENT_PAGE } from '../../../queries/index.graphql';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');
  const id = searchParams.get('id');
  const token = searchParams.get('token');
  const slugParam = searchParams.get('slug');

  // Require all params
  if (!slugParam && !type && !id) return new NextResponse('Invalid params', { status: 400 });
  if (process.env.SANITY_STUDIO_READ_TOKEN && token !== process.env.SANITY_STUDIO_READ_TOKEN) {
    return new NextResponse('Invalid token', { status: 401 });
  }

  try {
    const data = await fetchData<GetCurrentPageQuery>({
      query: GET_CURRENT_PAGE,
      variables: { slug: slugParam },
    });
    const slug = data?.allRoute[0]?.slug;
    // Set draft mode cookie that enables fetching data at request time (instead of at build time)
    draftMode().enable();
    const currentSlug = slug?.current === 'front-page' ? '' : slug?.current;
    const path = type === 'post' ? `/blog/${slugParam}` : `/${currentSlug}`;

    return new NextResponse(null, {
      status: 307,
      headers: {
        Location: path,
      },
    });
  } catch (e) {
    return new NextResponse('Not found', { status: 404 });
  }
}
