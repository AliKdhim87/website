import Image from 'next/image';

export type LogoType = {
  src: string;
  alt: string;
  width: string;
  height: string;
};
export interface LogoProps {
  logo?: LogoType;
}

export const Logo: React.FC<LogoProps> = ({ logo }) =>
  logo ? <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} layout="fixed" priority /> : null;
