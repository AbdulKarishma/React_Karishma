// ... existing imports and icons ...

export const NumberGridIcon = () => {
  return (
    <svg width="982" height="208" viewBox="0 0 982 208" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1_549)">
        <g clipPath="url(#clip0_1_549)">
          <rect x="4" width="974" height="200" rx="12" fill="white"/>
          <path d="M21.716 29V22.04L20.36 22.352V21.416L22.22 20.6H23.036V29H21.716Z" fill="#CCCCCC"/>
          {/* ... rest of the SVG paths ... */}
        </g>
      </g>
      <defs>
        <filter id="filter0_d_1_549" x="0" y="0" width="982" height="208" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_549"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_549" result="shape"/>
        </filter>
        <clipPath id="clip0_1_549">
          <rect x="4" width="974" height="200" rx="12" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

// ... export all icons ...
export default {
  // ... other icons
  NumberGridIcon,
};