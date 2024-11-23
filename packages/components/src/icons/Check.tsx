import { type ForwardedRef, forwardRef } from 'react';

import type { SVGRProps } from './Icon';
export const Check = forwardRef(({ title, titleId, ...props }: SVGRProps, ref: ForwardedRef<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    className="icon"
    aria-labelledby={titleId}
    ref={ref}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 12.611 8.923 17.5 20 6.5"
    />
  </svg>
));
Check.displayName = 'Check';
