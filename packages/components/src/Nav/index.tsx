/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { ElementType, useRef, useState } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';
import { NavButton } from './NavButton';
import { NavItem } from './NavItem';
import type { NavLinkProps } from './NavLink';
import { NavLink } from './NavLink';
import { activeLinkChecker, NavList } from './NavList';
import type { LinkType } from './NavList';
import { Container } from '../Container';
import { Drawer } from '../Drawer';
import { Grid } from '../Grid';
import { Header } from '../Header';
import { useClickOutsideDialog } from '../hooks/useClickOutsideDialog';
import { useDialog } from '../hooks/useDialog';
import { useTrapFocus } from '../hooks/useTrapFocus';

const css = classNames.bind(styles);

export interface NavProps<T extends ElementType = 'a'> {
  navLinks: LinkType[];
  logo: any;
  linkProps?: NavLinkProps<T>;
  pathname?: string;
}

export const Nav = ({ logo, navLinks, linkProps, pathname }: NavProps) => {
  const [mobileMode, setMobileMode] = useState(false);
  const navAriaContrOLiD = 'nav-aria-controls-id';
  const navListRef = useRef(null);
  const { close, dialogRef, openDialog, open } = useDialog();

  useTrapFocus(navListRef);
  useClickOutsideDialog({
    dialogRef,
    isDialogOpen: open,
  });

  return (
    <Header>
      <Container>
        <Grid as="nav" alignItems="center" container className={css('ali-dev-nav')} aria-labelledby="mainmenulabel">
          <span id="mainmenulabel" className="visually-hidden" hidden>
            Main Menu
          </span>
          {logo && (
            <Grid item xs={6} md={4}>
              {logo}
            </Grid>
          )}
          <Grid item xs={6} md={8} justifyContent="flex-end">
            <NavButton
              menuExpanded={mobileMode}
              aria-controls={navAriaContrOLiD}
              name="open"
              onClick={() => {
                setMobileMode((prevState) => !prevState);
                openDialog();
              }}
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
            <Drawer ref={dialogRef}>
              <div tabIndex={0} />
              <NavList ref={navListRef} mobile onClick={(e) => e.stopPropagation()} id={navAriaContrOLiD}>
                <NavItem>
                  <NavButton
                    menuExpanded={mobileMode}
                    aria-controls={navAriaContrOLiD}
                    name="close"
                    onClick={() => {
                      setMobileMode(false);
                      close();
                    }}
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
            </Drawer>
          </Grid>
        </Grid>
      </Container>
    </Header>
  );
};
