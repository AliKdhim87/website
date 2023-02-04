import classNames from 'classnames/bind';
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

import styles from '../index.module.scss';

import { CloseIcon, HamburgerIcon } from '@/components/reusable/icons';

const css = classNames.bind(styles);
interface NavButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  name: 'open' | 'close';
  menuExpanded: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({ name, menuExpanded, className, ...props }) => (
  <button
    className={css(className, 'nav__button', { 'nav__button--close': name === 'close' })}
    type="button"
    aria-expanded={menuExpanded}
    aria-describedby="nav-button-desc"
    {...props}
  >
    <span id="nav-button-desc" className="visually-hidden">{`${name} Menu Button`}</span>
    {name === 'close' ? <CloseIcon aria-hidden /> : <HamburgerIcon aria-hidden />}
  </button>
);
