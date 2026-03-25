'use client';

import type { NavProps } from '@ali-dev/components/src/Nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Nav } from '@/components/server';

interface NavigationProps extends Partial<NavProps> {}

export const Navigation = (props: NavigationProps) => {
  const pathname = usePathname();

  return (
    <Nav
      pathname={pathname}
      {...props}
      navLinks={props.navLinks || []}
      logo={props.logo}
      linkProps={{
        ...props.linkProps,
        as: Link,
      }}
    />
  );
};
