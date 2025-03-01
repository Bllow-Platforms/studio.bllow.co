import * as React from 'react';
import { SVGProps } from 'react';

const DashboardDollarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
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


const DashboardGravityIcon = (props: SVGProps<SVGSVGElement>) => {
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={26}
  height={27}
  fill="none"
  {...props}
>
  <path
    fill="#6355FF"
    fillRule="evenodd"
    d="M18.688 4.887H7.313a2.437 2.437 0 0 0-2.438 2.437V18.7a2.437 2.437 0 0 0 2.438 2.437h11.375a2.437 2.437 0 0 0 2.437-2.438V7.325a2.438 2.438 0 0 0-2.438-2.437ZM7.313 2.449a4.875 4.875 0 0 0-4.875 4.875V18.7a4.875 4.875 0 0 0 4.874 4.875h11.375a4.875 4.875 0 0 0 4.875-4.875V7.324a4.875 4.875 0 0 0-4.875-4.875H7.313Zm9.75 9.75h-8.24A1.625 1.625 0 0 0 7.2 13.825v3.25A1.625 1.625 0 0 0 8.824 18.7h8.239a1.625 1.625 0 0 0 1.625-1.625v-3.25a1.625 1.625 0 0 0-1.625-1.625ZM8.418 7.325h5.8a1.219 1.219 0 1 1 0 2.438h-5.8a1.219 1.219 0 1 1 0-2.438Z"
    clipRule="evenodd"
  />
</svg>
}

const DashboardSolarLockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke="#6355FF"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6.5 10.833V8.667c0-.37.03-.73.09-1.084m12.91 3.25V8.667a6.5 6.5 0 0 0-11.375-4.3m3.792 19.466h-3.25c-3.064 0-4.597 0-5.548-.952-.952-.951-.952-2.484-.952-5.548 0-3.063 0-4.596.952-5.547.951-.953 2.484-.953 5.548-.953h8.666c3.064 0 4.597 0 5.548.953.952.95.952 2.484.952 5.547 0 3.064 0 4.597-.952 5.548-.951.952-2.484.952-5.548.952H16.25"
    />
  </svg>
)

const DashboardSolarShopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={27}
    fill="none"
    {...props}
  >
    <path
      stroke="#6355FF"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3.792 12.218v3.25c0 4.085 0 6.128 1.27 7.397 1.269 1.269 3.311 1.27 7.396 1.27h1.084c4.085 0 6.128 0 7.397-1.27m1.27-10.647v3.25c0 1.267 0 2.338-.039 3.25"
    />
    <path
      stroke="#6355FF"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.292 2.468h5.416m-5.416 0-.707 7.06a3.431 3.431 0 1 0 6.83 0l-.707-7.06m-5.416 0H8.036c-.984 0-1.475 0-1.898.116A3.25 3.25 0 0 0 4.093 4.26m6.199-1.793-.786 7.849a3.315 3.315 0 1 1-6.546-.98l.073-.369m12.675-6.5h2.256c.984 0 1.475 0 1.898.116a3.25 3.25 0 0 1 2.045 1.677c.196.39.293.873.485 1.837l.648 3.24a3.316 3.316 0 1 1-6.546.979l-.786-7.849Zm-5.416 21.125v-3.25c0-1.013 0-1.519.217-1.896.143-.247.348-.452.595-.595.377-.217.883-.217 1.896-.217s1.519 0 1.896.217c.247.143.452.348.595.595.217.377.217.883.217 1.896v3.25"
    />
  </svg>
)

export { DashboardDollarIcon, DashboardBoltIcon, DashboardStoreIcon , DashboardGravityIcon, DashboardSolarLockIcon, DashboardSolarShopIcon };
