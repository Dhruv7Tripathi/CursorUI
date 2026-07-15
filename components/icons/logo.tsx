export const StackedLayersLogo = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-9 h-9 text-black dark:text-white"
  >
    <path
      d="M20 35 L50 20 L80 35 L50 50 Z"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinejoin="round"
      fill="url(#layerGradient)"
    />
    <path
      d="M20 50 L50 35 L80 50 L50 65 Z"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinejoin="round"
      fill="url(#layerGradient)"
    />
    <path
      d="M20 65 L50 50 L80 65 L50 80 Z"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinejoin="round"
      fill="url(#layerGradient)"
    />
    <defs>
      <linearGradient
        id="layerGradient"
        x1="0"
        y1="0"
        x2="100"
        y2="100"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" stopOpacity="0.8" />
        <stop stopColor="currentColor" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);
