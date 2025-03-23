import type { NavProps } from '@ali-dev/components';

import { Maybe, Navigation } from '@/graphql-types';

export const createNavData = (data: Maybe<Navigation> | undefined): NavProps => {
  const navLinks = Array.isArray(data?.items) && data.items.map((item) => ({ href: item?.route, text: item?.title }));

  const logo = {
    src: data?.logo?.asset?.url,
    width: data?.logo?.asset?.metadata?.dimensions?.width,
    height: data?.logo?.asset?.metadata?.dimensions?.height,
    alt: data?.logo?.alt,
  };
  return {
    navLinks,
    logo,
  } as unknown as NavProps;
};
