import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
// import { Portal } from "pretty-modal"
import { useRouter } from 'next/router';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  LiHTMLAttributes,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from 'react';
import { CSSTransition } from 'react-transition-group';

// import FocusTrap from "focus-trap-react"

import { Header } from '../Header';

import styles from './index.module.scss';

import { Container, Typography } from '@/components/reusable';
import { Backdrop } from '@/components/reusable/Backdrop';
import { Grid } from '@/components/reusable/Grid';
import { CloseIcon, HamburgerIcon } from '@/components/reusable/icons';
import { uuidv4, activeLinkChecker } from '@/utils';
import { Maybe } from 'generated/graphql';

const css = classNames.bind(styles);
interface NavButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  name: 'hamburger' | 'close';
}

export const NavButton: React.FC<NavButtonProps> = ({ name, ...props }) => (
  <button className={css('nav-hamburger')} type="button" {...props}>
    {name === 'close' ? <CloseIcon aria-label="close nav button" /> : <HamburgerIcon aria-label="open nav button" />}
  </button>
);

export type NavLinks = {
  href?: Maybe<string>;
  text?: Maybe<string>;
};

export type LogoTypes = {
  src?: Maybe<string>;
  width?: Maybe<number>;
  height?: Maybe<number>;
  alt?: Maybe<string>;
};

export interface NavProps {
  logo?: LogoTypes;
  navLinks?: NavLinks[];
}

interface NavLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  text: string;
  href: string;
  active: boolean;
}

const forwardRefLink = ({ href, text, active }: NavLinkProps, ref: React.LegacyRef<HTMLAnchorElement> | undefined) => {
  const classes = css('nav-link', {
    [css(`nav-link--active`)]: active,
  });
  return (
    <Link href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={classes} ref={ref}>
        <Typography as="span" variant="body">
          {text}
        </Typography>
      </a>
    </Link>
  );
};

export const NavLink = forwardRef(forwardRefLink);

interface NavLinksProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  mobile?: boolean;
}

export const NavLinks = ({ children, mobile, ...props }: NavLinksProps) => {
  const classes = css('nav-links', 'modal-content', {
    [css('nav-links--mobile')]: mobile,
  });
  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  );
};

type NavLinksItemProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

export const NavLinksItem = ({ children, className, ...props }: NavLinksItemProps) => (
  <li className={css('nav-links-item', className)} {...props}>
    {children}
  </li>
);

export const Nav = ({ logo, navLinks }: NavProps) => {
  const [mobileMode, setMobileMode] = useState(false);
  const backdrop = useRef<HTMLDivElement | null>(null);
  const { pathname: currentPath } = useRouter();

  useEffect(() => {
    const { current } = backdrop;
    const clickHandler = (event: any) => {
      if (event.target === current) {
        setMobileMode(false);
      }
    };
    // FIXME: this is not working
    // close the nav when clicking outside also when clicking the esc key
    const keyHandler = (event: { which: number }) => {
      if ([27].indexOf(event.which) >= 0 && mobileMode) {
        setMobileMode(false);
      }
    };

    if (current) {
      current.addEventListener('click', clickHandler);
      window.addEventListener('keyup', keyHandler);
    }

    return () => {
      if (current) {
        current.removeEventListener('click', clickHandler);
        window.removeEventListener('keyup', keyHandler);
      }
    };
  }, [mobileMode]);

  return (
    <Header>
      <Container>
        <Grid as="nav" alignItems="center" container className={css('nav')}>
          <Grid item xs={6} md={4}>
            {logo && logo.src && logo.alt && logo.width && logo.height && (
              <Link href="/" passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    layout="fixed"
                    priority
                  />
                </a>
              </Link>
            )}
          </Grid>
          <Grid item xs={6} md={8} justifyContent="flex-end">
            <NavLinks>
              {navLinks &&
                navLinks.map(({ href, text }) => (
                  <NavLinksItem key={uuidv4()} className={classNames('display-hidden', 'display-block-md')}>
                    {text && href && <NavLink text={text} href={href} active={activeLinkChecker(href, currentPath)} />}
                  </NavLinksItem>
                ))}
              <NavLinksItem className={css('display-hidden-md')}>
                <NavButton name="hamburger" onClick={() => setMobileMode((prevState) => !prevState)} />
              </NavLinksItem>
            </NavLinks>
            <CSSTransition in={mobileMode} timeout={300} classNames="modal" unmountOnExit mountOnEnter>
              <Backdrop ref={backdrop} onClick={() => setMobileMode(false)}>
                <NavLinks mobile onClick={(e) => e.stopPropagation()}>
                  {navLinks &&
                    navLinks.map(({ href, text }) => (
                      <NavLinksItem key={uuidv4()}>
                        {href && text && (
                          <Link href={href} passHref>
                            <NavLink text={text} href={href} active={activeLinkChecker(href, currentPath)} />
                          </Link>
                        )}
                      </NavLinksItem>
                    ))}
                  <NavLinksItem className={css('display-hidden-md')}>
                    <NavButton name="close" onClick={() => setMobileMode(false)} />
                  </NavLinksItem>
                </NavLinks>
              </Backdrop>
            </CSSTransition>
          </Grid>
        </Grid>
      </Container>
    </Header>
  );
};
