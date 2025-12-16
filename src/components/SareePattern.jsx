// SVG Pattern Component for Saree-like textures
const SareePattern = ({ type = 'floral' }) => {
  const patterns = {
    floral: (
      <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="none">
        <defs>
          <pattern id="floralPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="8" fill="rgba(212, 175, 55, 0.1)" />
            <circle cx="75" cy="25" r="8" fill="rgba(212, 175, 55, 0.1)" />
            <circle cx="50" cy="50" r="12" fill="rgba(212, 175, 55, 0.15)" />
            <path d="M25 75 Q50 60 75 75 T125 75" stroke="rgba(212, 175, 55, 0.2)" strokeWidth="1" fill="none" />
            <path d="M50 100 Q50 85 50 100" stroke="rgba(10, 77, 104, 0.2)" strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#floralPattern)" />
      </svg>
    ),
    geometric: (
      <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="none">
        <defs>
          <pattern id="geometricPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 0 L40 0 L40 40 L0 40 Z" fill="none" stroke="rgba(10, 77, 104, 0.1)" strokeWidth="1" />
            <circle cx="20" cy="20" r="8" fill="rgba(212, 175, 55, 0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometricPattern)" />
      </svg>
    ),
    paisley: (
      <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="none">
        <defs>
          <pattern id="paisleyPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 Q60 20 40 40 Q20 20 40 0" fill="rgba(212, 175, 55, 0.15)" />
            <path d="M40 40 Q60 60 40 80 Q20 60 40 40" fill="rgba(10, 77, 104, 0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#paisleyPattern)" />
      </svg>
    ),
  }

  return patterns[type] || patterns.floral
}

export default SareePattern

