export default function HeroVisual() {
  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-2xl border border-[#dce3ea] bg-[#f8fbff]">
      <svg
        viewBox="0 0 720 520"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="softCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1f8a8a" stopOpacity="0.18" />
            <stop offset="45%" stopColor="#1f8a8a" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <pattern id="dataDots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#1f5d99" opacity="0.28" />
          </pattern>

          <clipPath id="africaClip">
            <path d="M337 52C390 58 424 78 455 110C493 150 522 184 525 231C528 277 503 317 482 351C458 389 439 434 396 455C352 477 303 463 265 438C227 413 206 374 181 337C158 303 124 278 120 236C116 195 143 160 172 132C204 101 281 45 337 52Z" />
          </clipPath>
        </defs>

        {/* soft background */}
        <rect width="720" height="520" fill="#f8fbff" />
        <circle cx="370" cy="255" r="210" fill="url(#softCore)" opacity="0.85" />

        {/* Africa silhouette */}
        <path
          d="M337 52C390 58 424 78 455 110C493 150 522 184 525 231C528 277 503 317 482 351C458 389 439 434 396 455C352 477 303 463 265 438C227 413 206 374 181 337C158 303 124 278 120 236C116 195 143 160 172 132C204 101 281 45 337 52Z"
          fill="#eaf2fb"
          stroke="#cddceb"
          strokeWidth="1.4"
        />

        {/* subtle data texture clipped inside Africa */}
        <g clipPath="url(#africaClip)">
          <rect x="80" y="40" width="500" height="440" fill="url(#dataDots)" opacity="0.55" />

          {/* containment rings */}
          <path
            d="M215 180C260 135 335 122 390 147C449 174 479 237 457 294C435 353 372 386 309 374C247 362 201 313 194 253C191 224 197 199 215 180Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            opacity="0.75"
          />
          <path
            d="M250 208C282 178 336 169 377 190C417 211 437 254 421 293C405 334 359 356 313 347C268 338 236 302 232 260C230 239 237 222 250 208Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            opacity="0.72"
          />
          <path
            d="M286 234C307 215 340 211 366 225C391 239 403 266 393 291C383 316 354 331 326 326C298 321 277 298 275 271C274 257 278 244 286 234Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.2"
            opacity="0.75"
          />

          {/* calm core */}
          <circle cx="340" cy="268" r="34" fill="#1f8a8a" opacity="0.12" />
          <circle cx="340" cy="268" r="7" fill="#1f8a8a" opacity="0.75" />
        </g>

        {/* sparse flow lines outside silhouette */}
        <path
          d="M75 235C150 220 212 225 278 250"
          fill="none"
          stroke="#1f5d99"
          strokeWidth="1.2"
          opacity="0.35"
        />
        <path
          d="M95 300C175 285 248 292 320 316"
          fill="none"
          stroke="#1f8a8a"
          strokeWidth="1.2"
          opacity="0.32"
        />
        <path
          d="M390 176C470 145 560 142 650 178"
          fill="none"
          stroke="#1f5d99"
          strokeWidth="1.2"
          opacity="0.35"
        />
        <path
          d="M405 316C492 348 570 346 660 300"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.2"
          opacity="0.45"
        />

        {/* sparse nodes */}
        <circle cx="278" cy="250" r="4" fill="#1f5d99" opacity="0.65" />
        <circle cx="320" cy="316" r="4" fill="#1f8a8a" opacity="0.55" />
        <circle cx="405" cy="316" r="4" fill="#d4a017" opacity="0.65" />
        <circle cx="390" cy="176" r="4" fill="#1f5d99" opacity="0.5" />
      </svg>
    </div>
  );
}
