// Decorative SVG Elements for Premium Look
export const PeacockFeather = ({ className = '', size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="featherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--primary-teal)" stopOpacity="0.8" />
        <stop offset="50%" stopColor="var(--deep-teal)" stopOpacity="0.6" />
        <stop offset="100%" stopColor="var(--accent-gold)" stopOpacity="0.4" />
      </linearGradient>
    </defs>
    <path
      d="M50 10 Q60 30 50 50 Q40 30 50 10 Z"
      fill="url(#featherGradient)"
      opacity="0.3"
    />
    <circle cx="50" cy="50" r="8" fill="var(--accent-gold)" opacity="0.5" />
    <path
      d="M50 50 L50 90 M45 60 L50 50 L55 60"
      stroke="var(--primary-teal)"
      strokeWidth="2"
      opacity="0.4"
    />
  </svg>
)

export const OrnamentalBorder = ({ className = '' }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    className={className}
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="ornament" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="3" fill="var(--accent-gold)" opacity="0.2" />
        <path d="M20 10 Q25 15 20 20 Q15 15 20 10" fill="var(--primary-teal)" opacity="0.15" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ornament)" />
  </svg>
)

