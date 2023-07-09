'use client';

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import classNames from 'classnames/bind';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Container } from '@/components/reusable';
import { Backdrop } from '@/components/reusable/Backdrop';
import { Grid } from '@/components/reusable/Grid';
import { uuidv4, activeLinkChecker, trapFocus } from '@/utils';

import { Header } from '../Header';
import { Logo } from '../Logo';

import styles from './index.module.scss';
import { NavButton } from './NavButton';
import { NavItem } from './NavItem';
import { NavList } from './NavList';

const css = classNames.bind(styles);

export type NavLinks = {
  route: string | null;
  title: string | null;
};

export interface NavProps {
  navLinks: NavLinks[];
  logo: any;
}

export const Nav = ({ logo, navLinks }: NavProps) => {
  const [mobileMode, setMobileMode] = useState(false);
  const [active, setActive] = useState(false);
  const navAriaContrOLiD = 'nav-aria-controls-id';
  const pathname = usePathname();
  const navListRef = useRef(null);
  const [backdrop, setBackdrop] = useState<HTMLElement>();

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (event.target === backdrop) {
        setMobileMode(false);
      }
    };

    const keyHandler = (event: { which: number }) => {
      if ([27].indexOf(event.which) >= 0 && mobileMode) {
        setMobileMode(false);
      }
    };

    if (backdrop) {
      document.body.style.overflow = 'hidden';
      trapFocus(backdrop);
      backdrop?.addEventListener('click', clickHandler);
      window?.addEventListener('keyup', keyHandler);
    }
    if (!mobileMode) {
      document.body.style.overflow = 'auto';
    }
    return () => {
      if (backdrop) {
        document.body.style.overflow = 'auto';
        trapFocus(backdrop).onClose();
        backdrop.removeEventListener('click', clickHandler);
        window.removeEventListener('keyup', keyHandler);
      }
    };
  }, [mobileMode, backdrop]);

  return (
    <Header>
      <Container>
        <Grid as="nav" alignItems="center" container className={css('nav')} aria-labelledby="mainmenulabel">
          <span id="mainmenulabel" className="visually-hidden">
            Main Menu
          </span>
          <Grid item xs={6} md={4}>
            <Link href="/">
              <Logo logo={...logo} />
            </Link>
          </Grid>
          <Grid item xs={6} md={8} justifyContent="flex-end">
            <NavButton
              menuExpanded={mobileMode}
              aria-controls={navAriaContrOLiD}
              name="open"
              onClick={() => setMobileMode((prevState) => !prevState)}
            />
            <NavList id={navAriaContrOLiD}>
              {navLinks &&
                navLinks.map(({ route, title }) => (
                  <NavItem key={uuidv4()}>
                    {title && route && (
                      <Link
                        href={route}
                        aria-current={activeLinkChecker(route, pathname) && 'page'}
                        className={css('nav-link')}
                      >
                        {title}
                      </Link>
                    )}
                  </NavItem>
                ))}
            </NavList>

            <CSSTransition
              in={mobileMode}
              timeout={300}
              classNames="modal"
              unmountOnExit
              onEnter={(el: HTMLElement) => {
                setActive(!active);
                setBackdrop(el);
              }}
            >
              <Backdrop onClick={() => setMobileMode(false)}>
                <div tabIndex={0} />
                <NavList ref={navListRef} mobile onClick={(e) => e.stopPropagation()} id={navAriaContrOLiD}>
                  <NavItem>
                    <NavButton
                      menuExpanded={mobileMode}
                      aria-controls={navAriaContrOLiD}
                      name="close"
                      onClick={() => setMobileMode(false)}
                    />
                  </NavItem>
                  {navLinks &&
                    navLinks.map(({ route, title }) => (
                      <NavItem key={uuidv4()}>
                        {route && title && (
                          <Link
                            href={route}
                            aria-current={activeLinkChecker(route, pathname) && 'page'}
                            className={css('nav-link')}
                          >
                            {title}
                          </Link>
                        )}
                      </NavItem>
                    ))}
                </NavList>
                <div tabIndex={0} />
              </Backdrop>
            </CSSTransition>
          </Grid>
        </Grid>
      </Container>
    </Header>
  );
};
