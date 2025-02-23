const LoadingSpinner = () => (
  <svg
    width="71"
    height="72"
    viewBox="0 0 71 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M64.6261 17.2073C75.1343 33.7817 70.3319 55.2221 53.9878 65.5844C37.6436 75.9466 16.2031 71.1443 5.69491 54.5699C-4.66737 38.2257 -0.0109473 16.5551 16.3332 6.19278C32.6774 -4.16951 54.2638 0.863068 64.6261 17.2073ZM59.7919 20.2722C46.7428 35.3227 45.142 42.4695 50.9229 60.7502C35.7264 47.4709 28.5796 45.8701 10.2989 51.6509C23.7241 36.6846 25.179 29.3076 19.5441 11.2572C34.3644 24.4522 41.7414 25.9071 59.7919 20.2722Z"
      fill="#6355FF"
    />
  </svg>
);

const DefaultLoadingPage = () => {
  return (
    <div className="h-screen w-full bg-white flex items-center justify-center  fixed bottom-0 top-0 right-0 left-0">
      <div className="animate animate-spin">
        <LoadingSpinner />
      </div>
    </div>
  );
};

export default DefaultLoadingPage;
