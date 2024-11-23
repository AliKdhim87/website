import type { ElementType, ForwardedRef, ImgHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import classnames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classnames.bind(styles);

export type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'> {
  logo: ImageType;
  Image?: any;
}

export const Logo = forwardRef(
  ({ logo, Image: Component = 'img', className, ...props }: LogoProps, ref: ForwardedRef<HTMLImageElement>) => {
    const { src, alt, width, height } = logo;

    const ImageComponent = Component as ElementType<ImgHTMLAttributes<HTMLImageElement>>;

    return (
      <ImageComponent
        {...(props as ImgHTMLAttributes<HTMLImageElement>)}
        ref={ref}
        className={cx('ali-dev-logo', className)}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    );
  },
);

Logo.displayName = 'Logo';
