import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import { CloseIcon, HamburgerIcon } from '../../icons';
import styles from '../index.module.scss';

const css = classNames.bind(styles);
interface NavButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  name: 'open' | 'close';
  menuExpanded: boolean;
}

export const NavButton = ({ name, menuExpanded, className, ...props }: NavButtonProps) => (
  <button
    className={css(className, 'ali-dev-nav__button', { 'ali-dev-nav__button--close': name === 'close' })}
    type="button"
    aria-expanded={menuExpanded}
    aria-describedby="nav-button-desc"
    {...props}
  >
    <span id="nav-button-desc" className="visually-hidden" hidden>{`${name} Menu Button`}</span>
    {name === 'close' ? <CloseIcon aria-hidden /> : <HamburgerIcon aria-hidden />}
  </button>
);
