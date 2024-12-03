'use client';

import type { NavProps } from '@ali-dev/components';
import { usePathname } from 'next/navigation';

import { Nav } from '@/components';

interface NavigationProps extends NavProps {}

export const Navigation = ({ ...restProps }: NavigationProps) => {
  const pathname = usePathname();

  return <Nav pathname={pathname} {...restProps} />;
};
