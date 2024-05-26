import * as React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMail = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 31 30"
    className="icon"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.5 14.823 3.505 8.826A3 3 0 0 1 6.5 6h18a3 3 0 0 1 2.996 2.826zm0 3.354 12-6V21a3 3 0 0 1-3 3h-18a3 3 0 0 1-3-3v-8.823z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMail;
