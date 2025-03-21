import Link from "next/link";
import * as React from "react";
import { SVGProps } from "react";
const LogoSvg = (props: SVGProps<SVGSVGElement>) => (
  <Link href={'/'}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={94}
    height={31}
    fill="none"
    {...props}
  >
    <path
      fill="#FEFEFE"
      d="M15.986 19.01c1.55.331 2.797 1.107 3.738 2.328.94 1.195 1.411 2.568 1.411 4.12 0 2.237-.788 4.018-2.365 5.34-1.551 1.297-3.725 1.945-6.523 1.945H-.226V5.965h12.054c2.72 0 4.844.623 6.37 1.87 1.551 1.245 2.327 2.936 2.327 5.073 0 1.576-.42 2.886-1.259 3.929-.814 1.042-1.907 1.767-3.28 2.174Zm-9.69-2.212h4.273c1.068 0 1.882-.228 2.441-.686.585-.483.877-1.183.877-2.098 0-.916-.292-1.615-.877-2.098-.56-.483-1.373-.725-2.441-.725H6.297v5.607Zm4.807 10.681c1.093 0 1.933-.241 2.518-.725.61-.508.915-1.233.915-2.174 0-.94-.318-1.678-.954-2.212-.61-.534-1.462-.801-2.555-.801h-4.73v5.912h4.806ZM27.987 4.516v28.227h-6.523V4.516h6.523ZM35.857 4.516v28.227h-6.523V4.516h6.523ZM94.92 11.458l-5.76 21.285h-7.209l-3.357-13.808-3.47 13.808h-7.172l-5.798-21.285h6.523l3.013 15.22 3.586-15.22h6.904l3.624 15.144 2.975-15.144h6.142Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M50.388 5.758c6.91 0 12.38 5.471 12.38 12.285 0 6.815-5.47 12.285-12.38 12.285-6.814 0-12.381-5.47-12.381-12.285 0-6.814 5.567-12.285 12.38-12.285Zm0 2.016c2.015 6.718 3.839 8.542 10.365 10.27-6.814 2.015-8.638 3.838-10.365 10.365-1.92-6.814-3.84-8.638-10.27-10.366 6.719-1.92 8.542-3.839 10.27-10.27Z"
      clipRule="evenodd"
    />
  </svg></Link>
);


const SecondaryLogo = () => {
  return <Link href={'/'}>
    <svg width="90" height="25" viewBox="0 0 94 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_329_13998)">
  <path d="M15.9856 18.3409C17.5368 18.6714 18.7829 19.4471 19.7238 20.6677C20.6647 21.863 21.1352 23.2362 21.1352 24.7874C21.1352 27.0253 20.3469 28.8054 18.7702 30.1278C17.2189 31.4248 15.0446 32.0732 12.2473 32.0732H-0.226286V5.29508H11.8277C14.5487 5.29508 16.6722 5.91813 18.198 7.16421C19.7493 8.4103 20.5249 10.1014 20.5249 12.2376C20.5249 13.8143 20.1053 15.1239 19.2661 16.1666C18.4523 17.2092 17.3588 17.934 15.9856 18.3409ZM6.2966 16.1284H10.5689C11.637 16.1284 12.4507 15.8995 13.0102 15.4418C13.5951 14.9586 13.8876 14.2593 13.8876 13.3438C13.8876 12.4283 13.5951 11.729 13.0102 11.2458C12.4507 10.7626 11.637 10.521 10.5689 10.521H6.2966V16.1284ZM11.1029 26.8092C12.1964 26.8092 13.0356 26.5676 13.6205 26.0844C14.2309 25.5758 14.536 24.851 14.536 23.9101C14.536 22.9692 14.2182 22.2317 13.5824 21.6977C12.9721 21.1636 12.1201 20.8966 11.0266 20.8966H6.2966V26.8092H11.1029Z" fill="#6355FF"/>
  <path d="M27.9873 3.84555V32.0732H21.4644V3.84555H27.9873Z" fill="#6355FF"/>
  <path d="M35.8574 3.84555V32.0732H29.3345V3.84555H35.8574Z" fill="#6355FF"/>
  <path d="M94.9208 10.788L89.1608 32.0732H81.9513L78.5945 18.2646L75.1233 32.0732H67.9519L62.1538 10.788H68.6767L71.6902 26.0081L75.2759 10.788H82.1802L85.804 25.9318L88.7794 10.788H94.9208Z" fill="#6355FF"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M50.3879 5.08838C57.2982 5.08838 62.7689 10.5591 62.7689 17.3734C62.7689 24.1878 57.2982 29.6585 50.3879 29.6585C43.5735 29.6585 38.0068 24.1878 38.0068 17.3734C38.0068 10.5591 43.5735 5.08838 50.3879 5.08838ZM50.3879 7.10389C52.4034 13.8223 54.2269 15.6458 60.7534 17.3734C53.939 19.3889 52.1154 21.2125 50.3879 27.7389C48.4683 20.9246 46.5488 19.101 40.1183 17.3734C46.8367 15.4539 48.6603 13.5343 50.3879 7.10389Z" fill="#6355FF"/>
  </g>
  <defs>
  <clipPath id="clip0_329_13998">
  <rect width="93.9613" height="29.6599" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  </Link>
  
}

export default LogoSvg;
export  { SecondaryLogo }
