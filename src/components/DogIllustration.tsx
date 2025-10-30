export default function DogIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-0 bg-sage/20 rounded-full blur-3xl animate-pulse"></div>

      <svg
        viewBox="0 0 400 400"
        className="w-full h-full relative z-10 drop-shadow-2xl animate-float"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="200" cy="340" rx="120" ry="20" fill="#8B6641" opacity="0.2" />

        <path
          d="M200 280 C200 280 160 260 140 240 C120 220 110 180 120 150 C130 120 150 110 170 110 C180 110 185 115 190 120 C195 115 200 110 210 110 C230 110 250 120 260 150 C270 180 260 220 240 240 C220 260 200 280 200 280 Z"
          fill="#8B6641"
          className="animate-float-delay"
        />

        <circle cx="170" cy="160" r="8" fill="#FFF" />
        <circle cx="230" cy="160" r="8" fill="#FFF" />
        <circle cx="172" cy="162" r="5" fill="#4A4A4A" />
        <circle cx="232" cy="162" r="5" fill="#4A4A4A" />

        <path
          d="M190 180 Q200 190 210 180"
          stroke="#FFF"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        <ellipse cx="200" cy="185" rx="6" ry="10" fill="#4A4A4A" />

        <path
          d="M110 140 C90 130 80 110 85 90 C90 70 110 60 130 70 C125 90 115 120 110 140 Z"
          fill="#A0826D"
          className="animate-wiggle"
        />
        <path
          d="M290 140 C310 130 320 110 315 90 C310 70 290 60 270 70 C275 90 285 120 290 140 Z"
          fill="#A0826D"
          className="animate-wiggle"
        />

        <path
          d="M180 200 Q185 205 190 200"
          stroke="#8B6641"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M210 200 Q215 205 220 200"
          stroke="#8B6641"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        <g className="animate-bounce-slow">
          <path
            d="M160 210 Q150 230 155 250 L165 245 Z"
            fill="#A0826D"
          />
          <path
            d="M240 210 Q250 230 245 250 L235 245 Z"
            fill="#A0826D"
          />
          <path
            d="M180 250 Q175 280 180 310 L190 305 Z"
            fill="#A0826D"
          />
          <path
            d="M220 250 Q225 280 220 310 L210 305 Z"
            fill="#A0826D"
          />

          <ellipse cx="157" cy="252" rx="8" ry="6" fill="#4A4A4A" />
          <ellipse cx="243" cy="252" rx="8" ry="6" fill="#4A4A4A" />
          <ellipse cx="182" cy="312" rx="8" ry="6" fill="#4A4A4A" />
          <ellipse cx="218" cy="312" rx="8" ry="6" fill="#4A4A4A" />
        </g>

        <path
          d="M185 285 C185 285 195 290 200 290 C205 290 215 285 215 285"
          stroke="#FFF"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
