import * as React from 'react';
import { SVGProps } from 'react';

const DashboardDollarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={13}
    fill="none"
    {...props}
  >
    <path
      stroke="#5C5C5C"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.904 12.333a5.833 5.833 0 1 0 0-11.666 5.833 5.833 0 0 0 0 11.666Z"
    />
    <path
      stroke="#5C5C5C"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.654 4.458c-.4-.4-1.103-.677-1.75-.695m0 0c-.77-.02-1.458.328-1.458 1.278 0 1.75 3.208.875 3.208 2.625 0 .998-.854 1.427-1.75 1.395m0-5.298V2.708M5.154 8.25c.376.501 1.075.787 1.75.811m0 0v1.23"
    />
  </svg>
);

const DashboardBoltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={13}
    fill="none"
    {...props}
  >
    <path
      stroke="#5C5C5C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.937 6.893H2.67c-.866 0-1.298 0-1.483-.286-.184-.285-.009-.682.343-1.477l1.057-2.39c.32-.724.48-1.085.79-1.288.309-.202.702-.202 1.49-.202h1.218c.956 0 1.434 0 1.614.312.18.313-.057.73-.53 1.564l-.626 1.1c-.236.415-.354.622-.352.792.002.22.12.424.309.535.146.086.383.086.858.086.6 0 .901 0 1.058.104.203.135.31.377.272.619-.029.186-.23.41-.635.857l-3.228 3.57c-.634.701-.951 1.052-1.165.94-.213-.11-.11-.573.094-1.498l.401-1.812c.156-.705.233-1.057.047-1.291-.188-.235-.547-.235-1.265-.235Z"
    />
  </svg>
);

const DashboardStoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <path
      stroke="#5C5C5C"
      strokeLinecap="round"
      d="M1.946 5.917v1.75c0 2.2 0 3.3.683 3.982.684.684 1.784.684 3.983.684h.584c2.2 0 3.3 0 3.983-.684m.683-5.732v1.75c0 .682 0 1.258-.02 1.75"
    />
    <path
      stroke="#5C5C5C"
      strokeLinecap="round"
      d="M5.446.667h2.916m-2.916 0-.38 3.801a1.847 1.847 0 1 0 3.677 0L8.363.667m-2.917 0H4.23c-.53 0-.794 0-1.022.062a1.75 1.75 0 0 0-1.101.903M5.446.667l-.423 4.226a1.785 1.785 0 1 1-3.525-.528l.04-.199m6.824-3.5h1.215c.53 0 .794 0 1.022.063a1.75 1.75 0 0 1 1.101.903c.106.21.158.47.261.99l.35 1.743a1.786 1.786 0 1 1-3.526.528L8.362.667ZM5.446 12.042v-1.75c0-.545 0-.817.117-1.02a.875.875 0 0 1 .32-.32c.203-.118.476-.118 1.021-.118.545 0 .818 0 1.02.117a.875.875 0 0 1 .321.32c.117.204.117.476.117 1.021v1.75"
    />
  </svg>
);

export { DashboardDollarIcon, DashboardBoltIcon, DashboardStoreIcon };
