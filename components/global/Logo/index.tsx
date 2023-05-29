import Image, { ImageProps } from 'next/image';

export interface LogoProps {
  logo?: ImageProps;
}
export const Logo: React.FC<LogoProps> = ({ logo }) =>
  logo && logo.src && logo.width ? (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      priority
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  ) : null;
