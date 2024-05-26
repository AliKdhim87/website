import * as React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGithubIcon = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <g clipPath="url(#githubIcon_svg__a)">
      <path
        fill="currentColor"
        d="M12.499 0C5.873 0 .5 5.394.5 12.048c0 5.322 3.438 9.837 8.208 11.432.6.11.819-.262.819-.581 0-.287-.01-1.044-.016-2.049-3.338.727-4.043-1.616-4.043-1.616-.545-1.392-1.332-1.762-1.332-1.762-1.09-.747.081-.732.081-.732 1.205.086 1.838 1.242 1.838 1.242 1.07 1.84 2.809 1.31 3.493 1 .108-.778.418-1.309.762-1.61-2.664-.305-5.466-1.338-5.466-5.954 0-1.315.468-2.391 1.236-3.234-.125-.304-.535-1.53.117-3.187 0 0 1.008-.324 3.3 1.234.957-.267 1.983-.4 3.005-.405 1.018.006 2.045.138 3.004.407 2.29-1.559 3.297-1.235 3.297-1.235.654 1.659.243 2.883.12 3.187.77.843 1.233 1.919 1.233 3.234 0 4.628-2.805 5.647-5.478 5.945.43.372.814 1.107.814 2.23 0 1.611-.015 2.91-.015 3.305 0 .322.216.697.825.579a12.05 12.05 0 0 0 8.198-11.43C24.5 5.394 19.127 0 12.499 0"
      />
    </g>
    <defs>
      <clipPath id="githubIcon_svg__a">
        <path fill="currentColor" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGithubIcon;
