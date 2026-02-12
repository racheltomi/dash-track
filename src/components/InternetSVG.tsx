
const InternetSVG = () => {
  return (
    <div>
        {/* Animated WWW / internet half-globe with metric cards (vector, no rectangular bg) */}
        <div className="mt-12 w-full max-w-full">
            <div className="relative mx-auto h-96 w-full">
              <svg
                viewBox="0 0 600 360"
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* brand-ish teal glow + strokes */}
                  <radialGradient id="heroGlobeGlow" cx="50%" cy="35%" r="75%">
                    <stop offset="0%" stopColor="#12f4b3" stopOpacity="0.45" />
                    <stop offset="40%" stopColor="#12f4b3" stopOpacity="0.24" />
                    <stop offset="100%" stopColor="#0a1f1a" stopOpacity="0" />
                  </radialGradient>
                  {/* dark fill inside globe */}
                  <radialGradient id="heroGlobeFill" cx="50%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#0f2b26" stopOpacity="0.95" />
                    <stop offset="45%" stopColor="#0a1f1a" stopOpacity="0.9" />
                    <stop offset="90%" stopColor="#0a1f1a" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0a1f1a" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="heroGlobeStroke" cx="50%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#12f4b3" stopOpacity="1" />
                    <stop offset="55%" stopColor="#12f4b3" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#12f4b3" stopOpacity="0.1" />
                  </radialGradient>
                  <linearGradient id="heroWWW" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0a1f1a" />
                    <stop offset="45%" stopColor="#0d2b26" />
                    <stop offset="100%" stopColor="#0f3d35" />
                  </linearGradient>
                  <linearGradient id="heroProgress" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#12f4b3" />
                    <stop offset="100%" stopColor="#0ad19b" />
                  </linearGradient>
                  <filter id="heroCardShadow" x="-30%" y="-40%" width="160%" height="200%">
                    <feDropShadow
                      dx="0"
                      dy="10"
                      stdDeviation="14"
                      floodColor="#0a1f1a"
                      floodOpacity="0.65"
                    />
                  </filter>
                </defs>

                {/* full internet globe (bigger, darker interior, bright teal lines) */}
                <g transform="translate(300 205)">
                  {/* pulsing outer glow */}
                  <circle r="205" fill="url(#heroGlobeGlow)" opacity="0.9">
                    <animate
                      attributeName="opacity"
                      values="0.35;0.85;0.35"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* dark inner fill */}
                  <circle r="190" fill="url(#heroGlobeFill)" opacity="1" />
                  {/* main outline */}
                  <circle
                    r="195"
                    fill="none"
                    stroke="url(#heroGlobeStroke)"
                    strokeWidth="3.2"
                  />
                  {/* inner outline with dashes that rotate faster */}
                  <circle
                    r="172"
                    fill="none"
                    stroke="#12f4b3"
                    strokeOpacity="1"
                    strokeWidth="2.2"
                    strokeDasharray="12 10"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;80"
                      dur="9s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* WWW-style latitude / longitude */}
                  <ellipse
                    rx="165"
                    ry="80"
                    fill="none"
                    stroke="#12f4b3"
                    strokeOpacity="1"
                    strokeWidth="2.2"
                  />
                  <ellipse
                    rx="122"
                    ry="58"
                    fill="none"
                    stroke="#5df5ce"
                    strokeOpacity="0.9"
                    strokeWidth="1.9"
                  />
                  <ellipse
                    rx="200"
                    ry="70"
                    fill="none"
                    stroke="#0f766e"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    transform="rotate(18)"
                  />
                </g>

                {/* central WWW pill + cursor icon */}
                <g transform="translate(300 165)">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    additive="sum"
                    values="0 0; 0 -4; 0 0; 0 3; 0 0"
                    dur="9s"
                    repeatCount="indefinite"
                  />
                  <rect
                    x="-130"
                    y="-26"
                    width="260"
                    height="52"
                    rx="18"
                    fill="url(#heroWWW)"
                    stroke="#12f4b3"
                    strokeWidth="2"
                  />
                  <text
                    x="0"
                    y="7"
                    textAnchor="middle"
                    fontSize="28"
                    fontWeight="700"
                    letterSpacing="7"
                    fill="#e5fdf8"
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
                  >
                    WWW
                  </text>
                  {/* arrow cursor */}
                  <g transform="translate(110 40) scale(1)">
                    <polygon
                      points="0,0 40,16 22,22 30,46 22,50 14,26 0,34"
                      fill="#12f4b3"
                    />
                  </g>
                </g>

                {/* metric / health cards around globe */}
                {/* Top-right: Site performance */}
                <g filter="url(#heroCardShadow)" transform="translate(360 40)">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    additive="sum"
                    values="0 0; 0 -6; 2 -2; 0 0"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                  <rect x="0" y="0" width="210" height="120" rx="14" fill="#f9fbff" />
                  {/* icon circle */}
                  <circle cx="30" cy="34" r="11" fill="#0f172a" />
                  <path
                    d="M25 36l4-4 3 5 4-8"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect x="48" y="26" width="80" height="6" rx="3" fill="#cbd5e1" />
                  <rect x="18" y="48" width="140" height="5" rx="2.5" fill="#e2e8f0" />
                  <rect x="18" y="60" width="150" height="4" rx="2" fill="#e2e8f0" />
                  {/* progress */}
                  <rect x="18" y="82" width="174" height="12" rx="6" fill="#e5edf9" />
                  <rect
                    x="18"
                    y="82"
                    width="150"
                    height="12"
                    rx="6"
                    fill="url(#heroProgress)"
                  >
                    <animate
                      attributeName="width"
                      values="70;190;120;160;150"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <text
                    x="20"
                    y="104"
                    fontSize="10"
                    fill="#64748b"
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
                  >
                    Site performance
                  </text>
                </g>

                {/* Left: Speed */}
                <g filter="url(#heroCardShadow)" transform="translate(40 120)">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    additive="sum"
                    values="0 0; -4 -3; 1 1; 0 0"
                    dur="7.5s"
                    repeatCount="indefinite"
                  />
                  <rect x="0" y="0" width="170" height="80" rx="12" fill="#f9fbff" />
                  {/* icon circle */}
                  <circle cx="24" cy="26" r="10" fill="#0f172a" />
                  <path
                    d="M20 26h8M24 22v8"
                    stroke="#12f4b3"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <rect x="44" y="20" width="72" height="5" rx="2.5" fill="#cbd5e1" />
                  <rect x="16" y="46" width="132" height="10" rx="5" fill="#e5edf9" />
                  <rect
                    x="16"
                    y="46"
                    width="100"
                    height="10"
                    rx="5"
                    fill="url(#heroProgress)"
                  >
                    <animate
                      attributeName="width"
                      values="50;140;80;120;100"
                      dur="7s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <text
                    x="16"
                    y="70"
                    fontSize="10"
                    fill="#64748b"
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
                  >
                    Speed
                  </text>
                </g>

                {/* Bottom: Health score */}
                <g filter="url(#heroCardShadow)" transform="translate(210 260)">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    additive="sum"
                    values="0 0; 0 -4; 2 -1; 0 0"
                    dur="9s"
                    repeatCount="indefinite"
                  />
                  <rect x="0" y="0" width="190" height="82" rx="13" fill="#f9fbff" />
                  {/* health icon */}
                  <circle cx="26" cy="26" r="11" fill="#0f172a" />
                  <path
                    d="M21 26h4l2-4 4 8 2-4h4"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect x="46" y="20" width="90" height="5" rx="2.5" fill="#cbd5e1" />
                  <rect x="18" y="46" width="150" height="10" rx="5" fill="#e5edf9" />
                  <rect
                    x="18"
                    y="46"
                    width="120"
                    height="10"
                    rx="5"
                    fill="url(#heroProgress)"
                  >
                    <animate
                      attributeName="width"
                      values="60;160;90;150;120"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <text
                    x="18"
                    y="70"
                    fontSize="10"
                    fill="#64748b"
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
                  >
                    Health score
                  </text>
                </g>

                {/* Right: Uptime / status */}
                <g filter="url(#heroCardShadow)" transform="translate(430 215)">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    additive="sum"
                    values="0 0; 3 -3; -1 1; 0 0"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                  <rect x="0" y="0" width="140" height="70" rx="12" fill="#f9fbff" />
                  <circle cx="22" cy="24" r="9" fill="#0f172a" />
                  <circle cx="22" cy="24" r="4" fill="#22c55e" />
                  <rect x="40" y="20" width="70" height="4" rx="2" fill="#cbd5e1" />
                  <rect x="16" y="40" width="108" height="8" rx="4" fill="#e5edf9" />
                  <rect
                    x="16"
                    y="40"
                    width="78"
                    height="8"
                    rx="4"
                    fill="url(#heroProgress)"
                  >
                    <animate
                      attributeName="width"
                      values="40;115;70;95;78"
                      dur="6.5s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <text
                    x="16"
                    y="60"
                    fontSize="9.5"
                    fill="#64748b"
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
                  >
                    Uptime
                  </text>
                </g>
              </svg>
            </div>
          </div>
       
    </div>
  )
}

export default InternetSVG