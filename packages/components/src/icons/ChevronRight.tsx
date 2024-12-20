import { ForwardedRef, forwardRef } from 'react';

import type { SVGRProps } from './Icon';

export const ChevronRight = forwardRef(({ title, titleId, ...props }: SVGRProps, ref: ForwardedRef<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 185.343 185.343"
    className="icon"
    aria-labelledby={titleId}
    ref={ref}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M51.707 185.343a10.7 10.7 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.68 10.68 0 0 1-7.587 3.15"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
));

ChevronRight.displayName = 'ChevronRight';
