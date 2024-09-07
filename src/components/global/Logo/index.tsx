import classnames from 'classnames/bind';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

const cx = classnames.bind(styles);
export interface LogoProps {
  logo?: ImageProps;
}
export const Logo = ({ logo }: LogoProps) =>
  logo && logo.src && logo.width ? (
    <Link href="/" className={cx('logo')}>
      <Image
        className={cx('logo__image')}
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        priority
      />
    </Link>
  ) : null;
