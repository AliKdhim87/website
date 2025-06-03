import { type ForwardedRef, forwardRef } from 'react';

import type { SVGRProps } from './Icon';
export const PublishedAt = forwardRef(({ title, titleId, ...props }: SVGRProps, ref: ForwardedRef<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className="icon"
    aria-labelledby={titleId}
    ref={ref}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="none"
      stroke="currentColor"
      d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 17H5V8h14v12Zm-2.29-6.29-4.3 4.3a1 1 0 0 1-1.42 0l-2.3-2.3 1.42-1.42L12 15.17l3.59-3.59 1.42 1.42Z"
    />
  </svg>
));
PublishedAt.displayName = 'PublishedAt';
