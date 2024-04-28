import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBulletIcon = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 10 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={5} cy={5} r={5} fill="currentColor" />
    <path stroke="currentColor" strokeWidth={2} d="M6 18v120" />
  </svg>
);
export default SvgBulletIcon;
