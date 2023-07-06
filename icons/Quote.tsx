const Quote = ({ className }: SvgProps) => (
  <svg viewBox="0 0 24 24" className={className}>
    <g
      id="text-edit"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <g id="quote-left" fill="currentColor">
        <path
          d="M7,21 C4.790861,21 3,19.2099991 3,17 C3,15.5266673 4.33333333,10.8600006 7,3 L9,3 C7.66666667,9.66666667 7,13 7,13 C9.209139,13 11,14.790861 11,17 C11,19.209139 9.209139,21 7,21 Z M17,21 C14.790861,21 13,19.2099991 13,17 C13,15.5266673 14.3333333,10.8600006 17,3 L19,3 C17.6666667,9.66666667 17,13 17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 Z"
          id="Shape"
        />
      </g>
    </g>
  </svg>
);
export default Quote;
