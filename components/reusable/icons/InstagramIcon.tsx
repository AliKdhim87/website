import * as React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInstagramIcon = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    className="icon"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#instagramIcon_svg__a)">
      <path
        fill="url(#instagramIcon_svg__b)"
        d="M2 1.632C.114 3.592.5 5.672.5 11.992c0 5.25-.916 10.512 3.878 11.75 1.497.385 14.76.385 16.256-.002 1.996-.514 3.62-2.133 3.842-4.956.03-.394.03-13.182-.001-13.584-.236-3.007-2.087-4.74-4.526-5.09-.56-.081-.671-.105-3.54-.11C6.238.005 4.008-.448 2 1.632"
      />
      <path
        fill="currentColor"
        d="M12.498 3.139c-3.631 0-7.08-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.19-5.697-1.488-7.375-1.7-1.7-4-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.19 4.137-3.34 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.47a1.063 1.063 0 1 0 0 2.127 1.063 1.063 0 0 0 0-2.126m-4.73 1.244a4.55 4.55 0 1 0 .001 9.101 4.55 4.55 0 0 0-.001-9.101m0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908"
      />
    </g>
    <defs>
      <linearGradient
        id="instagramIcon_svg__b"
        x1={2.046}
        x2={24.348}
        y1={22.463}
        y2={3.157}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FD5" />
        <stop offset={0.5} stopColor="#FF543E" />
        <stop offset={1} stopColor="#C837AB" />
      </linearGradient>
      <clipPath id="instagramIcon_svg__a">
        <path fill="currentColor" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInstagramIcon;
