import { type ForwardedRef, forwardRef } from 'react';

import type { SVGRProps } from './Icon';

export const BulletIcon = forwardRef(({ title, titleId, ...props }: SVGRProps, ref: ForwardedRef<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 10 138"
    className="icon"
    aria-labelledby={titleId}
    ref={ref}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={5} cy={5} r={5} fill="currentColor" />
    <path stroke="currentColor" strokeWidth={2} d="M6 18v120" />
  </svg>
));
BulletIcon.displayName = 'BulletIcon';
