import React from 'react'

const DSCRegistrationFlow: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 300 400"
        className="w-full h-auto drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradients and Definitions */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff7ed" />
            <stop offset="100%" stopColor="#ffedd5" />
          </linearGradient>
          <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#fafafa" />
          </linearGradient>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
          <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.1" />
          </filter>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
          </marker>
        </defs>

        {/* Main background */}
        <rect
          width="300"
          height="400"
          rx="16"
          fill="url(#bgGradient)"
          stroke="#fed7aa"
          strokeWidth="1"
        />

        {/* Title */}
        <text
          x="150"
          y="30"
          textAnchor="middle"
          fill="#1f2937"
          fontSize="14"
          fontWeight="bold"
          fontFamily="system-ui"
        >
          Registration Process
        </text>

        {/* Step 1: Application Form */}
        <g transform="translate(40, 50)">
          <rect
            width="80"
            height="50"
            rx="6"
            fill="url(#cardGradient)"
            stroke="#e5e7eb"
            strokeWidth="1"
            filter="url(#cardShadow)"
          />
          <circle cx="40" cy="20" r="8" fill="url(#iconGradient)" />
          <rect
            x="36"
            y="16"
            width="8"
            height="8"
            rx="1"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
          <path d="M38 19 h4 M38 21 h3" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
          <text
            x="40"
            y="38"
            textAnchor="middle"
            fill="#374151"
            fontSize="7"
            fontFamily="system-ui"
          >
            Submit Form
          </text>
          <circle cx="20" cy="10" r="8" fill="#dc2626" />
          <text
            x="20"
            y="14"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            1
          </text>
        </g>

        {/* Arrow 1 */}
        <path d="M140 75 L160 75" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Step 2: Verification */}
        <g transform="translate(180, 50)">
          <rect
            width="80"
            height="50"
            rx="6"
            fill="url(#cardGradient)"
            stroke="#e5e7eb"
            strokeWidth="1"
            filter="url(#cardShadow)"
          />
          <circle cx="40" cy="20" r="8" fill="url(#iconGradient)" />
          <path
            d="M36 20 L39 23 L44 18"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <text
            x="40"
            y="38"
            textAnchor="middle"
            fill="#374151"
            fontSize="7"
            fontFamily="system-ui"
          >
            Verification
          </text>
          <circle cx="60" cy="10" r="8" fill="#dc2626" />
          <text
            x="60"
            y="14"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            2
          </text>
        </g>

        {/* Arrow 2 (down) */}
        <path d="M220 110 L220 130" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Step 3: Documents */}
        <g transform="translate(180, 140)">
          <rect
            width="80"
            height="50"
            rx="6"
            fill="url(#cardGradient)"
            stroke="#e5e7eb"
            strokeWidth="1"
            filter="url(#cardShadow)"
          />
          <circle cx="40" cy="20" r="8" fill="url(#iconGradient)" />
          <rect
            x="36"
            y="16"
            width="8"
            height="8"
            rx="1"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
          <path d="M38 19 h4 M38 21 h3" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
          <rect x="42" y="18" width="2" height="4" rx="0.5" fill="white" />
          <text
            x="40"
            y="38"
            textAnchor="middle"
            fill="#374151"
            fontSize="7"
            fontFamily="system-ui"
          >
            KYC Docs
          </text>
          <circle cx="60" cy="10" r="8" fill="#dc2626" />
          <text
            x="60"
            y="14"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            3
          </text>
        </g>

        {/* Arrow 3 (left) */}
        <path d="M160 165 L140 165" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Step 4: Login Setup */}
        <g transform="translate(40, 140)">
          <rect
            width="80"
            height="50"
            rx="6"
            fill="url(#cardGradient)"
            stroke="#e5e7eb"
            strokeWidth="1"
            filter="url(#cardShadow)"
          />
          <circle cx="40" cy="20" r="8" fill="url(#iconGradient)" />
          <rect
            x="36"
            y="17"
            width="8"
            height="6"
            rx="1"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
          <circle cx="40" cy="20" r="1" fill="white" />
          <text
            x="40"
            y="38"
            textAnchor="middle"
            fill="#374151"
            fontSize="7"
            fontFamily="system-ui"
          >
            Login Setup
          </text>
          <circle cx="20" cy="10" r="8" fill="#dc2626" />
          <text
            x="20"
            y="14"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            4
          </text>
        </g>

        {/* Arrow 4 (down) */}
        <path d="M80 200 L80 220" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Step 5: Training */}
        <g transform="translate(40, 230)">
          <rect
            width="80"
            height="50"
            rx="6"
            fill="url(#cardGradient)"
            stroke="#e5e7eb"
            strokeWidth="1"
            filter="url(#cardShadow)"
          />
          <circle cx="40" cy="20" r="8" fill="url(#iconGradient)" />
          <rect
            x="35"
            y="17"
            width="10"
            height="6"
            rx="1"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
          <circle cx="38" cy="20" r="1" fill="white" />
          <path d="M41 18 L44 20 L41 22" fill="white" />
          <text
            x="40"
            y="38"
            textAnchor="middle"
            fill="#374151"
            fontSize="7"
            fontFamily="system-ui"
          >
            Training
          </text>
          <circle cx="20" cy="10" r="8" fill="#dc2626" />
          <text
            x="20"
            y="14"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            5
          </text>
        </g>

        {/* Arrow to success */}
        <path d="M140 255 L160 255" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Success Badge */}
        <g transform="translate(180, 230)">
          <circle cx="40" cy="25" r="16" fill="#10b981" filter="url(#cardShadow)" />
          <path
            d="M32 25 L37 30 L48 19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <text
            x="40"
            y="55"
            textAnchor="middle"
            fill="#10b981"
            fontSize="8"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            Ready!
          </text>
        </g>

        {/* Decorative dots */}
        <circle cx="25" cy="25" r="1.5" fill="#fed7aa" opacity="0.6" />
        <circle cx="275" cy="35" r="2" fill="#fdba74" opacity="0.5" />
        <circle cx="260" cy="380" r="1.5" fill="#fed7aa" opacity="0.7" />
        <circle cx="40" cy="380" r="2" fill="#fdba74" opacity="0.4" />

        {/* Connection lines (subtle) */}
        <path
          d="M120 75 Q150 75 180 75"
          stroke="#fde68a"
          strokeWidth="1"
          opacity="0.3"
          fill="none"
        />
        <path
          d="M220 100 Q220 120 220 140"
          stroke="#fde68a"
          strokeWidth="1"
          opacity="0.3"
          fill="none"
        />
        <path
          d="M180 165 Q150 165 120 165"
          stroke="#fde68a"
          strokeWidth="1"
          opacity="0.3"
          fill="none"
        />
        <path
          d="M80 190 Q80 210 80 230"
          stroke="#fde68a"
          strokeWidth="1"
          opacity="0.3"
          fill="none"
        />
        <path
          d="M120 255 Q150 255 180 255"
          stroke="#fde68a"
          strokeWidth="1"
          opacity="0.3"
          fill="none"
        />
      </svg>
    </div>
  )
}

export default DSCRegistrationFlow
