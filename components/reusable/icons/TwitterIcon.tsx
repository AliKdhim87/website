import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTwitterIcon = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <g clipPath="url(#twitterIcon_svg__a)">
      <path
        d="M24.5 4.559c-.892.391-1.843.65-2.835.776a4.893 4.893 0 0 0 2.165-2.719 9.833 9.833 0 0 1-3.12 1.191 4.919 4.919 0 0 0-8.511 3.365c0 .39.033.764.114 1.121-4.091-.199-7.71-2.16-10.142-5.146a4.954 4.954 0 0 0-.673 2.487c0 1.704.877 3.214 2.185 4.089a4.859 4.859 0 0 1-2.223-.606v.054a4.943 4.943 0 0 0 3.942 4.835c-.4.109-.837.162-1.29.162a4.35 4.35 0 0 1-.932-.084c.638 1.948 2.447 3.38 4.598 3.427a9.886 9.886 0 0 1-6.1 2.099c-.404 0-.791-.018-1.178-.068a13.852 13.852 0 0 0 7.548 2.208c9.054 0 14.004-7.5 14.004-14.001 0-.217-.008-.427-.018-.636A9.816 9.816 0 0 0 24.5 4.559Z"
        fill="#03A9F4"
      />
    </g>
    <defs>
      <clipPath id="twitterIcon_svg__a">
        <path fill="currentColor" transform="translate(.5)" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTwitterIcon;
