/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import { ElementType, useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import { usePathname } from 'next/navigation';
import { CSSTransition } from 'react-transition-group';

import styles from './index.module.scss';
import { NavButton } from './NavButton';
import { NavItem } from './NavItem';
import type { NavLinkProps } from './NavLink';
import { NavLink } from './NavLink';
import { activeLinkChecker, NavList } from './NavList';
import type { LinkType } from './NavList';
import type { BackdropProps } from '../Backdrop';
import { Backdrop } from '../Backdrop';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Header } from '../Header';
import { Logo } from '../Logo';
// import { trapFocus } from '@/utils';
export const trapFocus = (element: HTMLElement, prevFocusableElement = document.activeElement) => {
  const focusableEls = Array.from(
    element.querySelectorAll(
      'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
    ),
  );
  const firstFocusableEl = focusableEls[0] as any;
  const lastFocusableEl = focusableEls[focusableEls.length - 1] as any;
  let currentFocus: Element | null = null;

  firstFocusableEl?.focus();
  currentFocus = firstFocusableEl;

  const handleFocus = (e: any) => {
    e.preventDefault();
    // if the focused element "lives" in your modal container then just focus it
    if (focusableEls.includes(e.target)) {
      currentFocus = e.target;
    } else {
      // you're out of the container
      // if previously the focused element was the first element then focus the last
      // element - means you were using the shift key
      if (currentFocus === firstFocusableEl) {
        lastFocusableEl.focus();
      } else {
        // you previously were focused on the last element so just focus the first one
        firstFocusableEl.focus();
      }
      // update the current focus var
      currentFocus = document.activeElement;
    }
  };

  document.addEventListener('focus', handleFocus, true);

  return {
    onClose: () => {
      document.removeEventListener('focus', handleFocus, true);
      (prevFocusableElement as any).focus();
    },
  };
};

const css = classNames.bind(styles);

export interface NavProps<T extends ElementType = 'a'> {
  navLinks: LinkType[];
  logo: any;
  backdrop?: BackdropProps;
  linkProps?: NavLinkProps<T>;
}

export const Nav = ({ logo, navLinks, linkProps }: NavProps) => {
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
      backdrop.addEventListener('click', clickHandler);
      window.addEventListener('keyup', keyHandler);
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
        <Grid as="nav" alignItems="center" container className={css('ali-dev-nav')} aria-labelledby="mainmenulabel">
          <span id="mainmenulabel" className="visually-hidden" hidden>
            Main Menu
          </span>
          <Grid item xs={6} md={4}>
            <Logo logo={{ ...logo }} />
          </Grid>
          <Grid item xs={6} md={8} justifyContent="flex-end">
            <NavButton
              menuExpanded={mobileMode}
              aria-controls={navAriaContrOLiD}
              name="open"
              onClick={() => setMobileMode((prevState) => !prevState)}
            />
            <NavList id={navAriaContrOLiD}>
              {Array.isArray(navLinks) &&
                navLinks.map(({ route, title }, index: number) => (
                  <NavItem key={index}>
                    {route && title && (
                      <NavLink
                        {...linkProps}
                        href={route}
                        aria-current={activeLinkChecker(route, pathname) && 'page'}
                        className={css('ali-dev-nav__link')}
                      >
                        {title}
                      </NavLink>
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
                  {Array.isArray(navLinks) &&
                    navLinks.map(({ route, title }, index: number) => (
                      <NavItem key={index}>
                        {route && title && (
                          <NavLink
                            href={route}
                            aria-current={activeLinkChecker(route, pathname) && 'page'}
                            className={css('ali-dev-nav__link')}
                          >
                            {title}
                          </NavLink>
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
