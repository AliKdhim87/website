/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState, useId } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Header } from '../Header';
import { Logo, LogoProps } from '../Logo';

import styles from './index.module.scss';
import { NavButton } from './NavButton';
import { NavItem } from './NavItem';
import { NavList } from './NavList';

import { Container } from '@/components/reusable';
import { Backdrop } from '@/components/reusable/Backdrop';
import { Grid } from '@/components/reusable/Grid';
import { uuidv4, activeLinkChecker, trapFocus } from '@/utils';

const css = classNames.bind(styles);

type NavLinks = {
  href: string;
  text: string;
};

export interface NavProps extends LogoProps {
  navLinks: NavLinks[];
}

export const Nav: React.FC<NavProps> = ({ logo, navLinks }) => {
  const [mobileMode, setMobileMode] = useState(false);
  const [active, setActive] = useState(false);

  const navAriaContrOLiD = useId();
  const { pathname: currentPath } = useRouter();
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
            {logo && logo.src && logo.alt && logo.width && logo.height && (
              <Link href="/" passHref>
                <Logo logo={logo} />
              </Link>
            )}
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
                navLinks.map(({ href, text }) => (
                  <NavItem key={uuidv4()}>
                    {text && href && (
                      <Link
                        href={href}
                        aria-current={activeLinkChecker(href, currentPath) && 'page'}
                        className={css('nav-link')}
                      >
                        {text}
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
                    navLinks.map(({ href, text }) => (
                      <NavItem key={uuidv4()}>
                        {href && text && (
                          <Link
                            href={href}
                            aria-current={activeLinkChecker(href, currentPath) && 'page'}
                            className={css('nav-link')}
                          >
                            {text}
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
