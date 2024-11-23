import { type ForwardedRef, forwardRef } from 'react';

import type { SVGRProps } from './Icon';
export const LinkedInIcon = forwardRef(({ title, titleId, ...props }: SVGRProps, ref: ForwardedRef<SVGSVGElement>) => (
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
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.574 1.767a1.316 1.316 0 0 1-1.287 1.326A1.346 1.346 0 0 1 .99 1.767 1.326 1.326 0 0 1 2.287.5a1.316 1.316 0 0 1 1.287 1.267M1.129 5.449c0-.762.485-.643 1.158-.643s1.148-.119 1.148.643v7.424c0 .772-.485.614-1.148.614s-1.158.158-1.158-.614zm4.306.001c0-.426.158-.585.405-.634s1.099 0 1.396 0 .416.485.406.851a2.49 2.49 0 0 1 2.217-.99 2.97 2.97 0 0 1 3.148 3.098v5.068c0 .772-.475.614-1.149.614-.673 0-1.148.158-1.148-.614V8.884A1.425 1.425 0 0 0 9.206 7.34 1.435 1.435 0 0 0 7.74 8.914v3.959c0 .772-.485.614-1.158.614s-1.148.158-1.148-.614V5.449Z"
    />
  </svg>
));
LinkedInIcon.displayName = 'LinkedInIcon';
