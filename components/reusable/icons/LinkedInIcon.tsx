import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLinkedInIcon = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#linkedInIcon_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 2.882a2.883 2.883 0 0 1 5.764 0c0 1.591-1.291 2.909-2.882 2.909C1.791 5.791.5 4.473.5 2.882ZM24.494 24h.006v-8.803c0-4.306-.927-7.623-5.96-7.623-2.42 0-4.045 1.328-4.708 2.587h-.07V7.976H8.99V24h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.55 0 2.587 2.384 2.587 4.243V24h4.965ZM.896 7.977h4.976V24H.896V7.977Z"
        fill="#0077B5"
      />
    </g>
    <defs>
      <clipPath id="linkedInIcon_svg__a">
        <path fill="currentColor" transform="translate(.5)" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLinkedInIcon;
