import { type ForwardedRef, forwardRef } from 'react';

import type { SVGRProps } from './Icon';

export const XIcon = forwardRef(({ title, titleId, ...props }: SVGRProps, ref: ForwardedRef<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    className="icon"
    aria-labelledby={titleId}
    ref={ref}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <g clipPath="url(#XIcon_svg__a)">
        <path
          fill="currentColor"
          d="M11.025.656h2.147L8.482 6.03 14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
        />
      </g>
      <defs>
        <clipPath id="XIcon_svg__a">
          <path fill="currentColor" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </g>
  </svg>
));
XIcon.displayName = 'XIcon';
