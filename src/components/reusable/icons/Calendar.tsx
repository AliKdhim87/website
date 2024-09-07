import * as React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalendar = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    className="icon"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.2 2.4A1.2 1.2 0 0 0 6 3.6v1.2H4.8a2.4 2.4 0 0 0-2.4 2.4v12a2.4 2.4 0 0 0 2.4 2.4h14.4a2.4 2.4 0 0 0 2.4-2.4v-12a2.4 2.4 0 0 0-2.4-2.4H18V3.6a1.2 1.2 0 1 0-2.4 0v1.2H8.4V3.6a1.2 1.2 0 0 0-1.2-1.2m0 6a1.2 1.2 0 0 0 0 2.4h9.6a1.2 1.2 0 1 0 0-2.4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalendar;
