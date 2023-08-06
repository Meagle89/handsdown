export default function HeroLogo({ className} : SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 244 137"
      className={className}
    >
      <defs>
        <pattern
          id="pattern"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 710 375"
        >
          <image
            width={710}
            height={375}
            xlinkHref="data:image/png;base64,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"
          />
        </pattern>
        <filter
          id="Asset_1"
          x={0}
          y={0}
          width={244}
          height={137}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="blur" />
          <feFlood floodColor="#fff" floodOpacity={0.224} />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Asset_1)">
        <rect
          id="Asset_1-2"
          data-name="Asset 1"
          width={226}
          height={119}
          transform="translate(9 6)"
          fill="url(#pattern)"
        />
      </g>
    </svg>
  )
}
