export function SearchSvg({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
        stroke="#2B80B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 15L21 21"
        stroke="#2B80B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="2"
        stroke="#A2B2C5"
        strokeWidth="2"
      />
      <path d="M20 12L20 28" stroke="#2B80B0" strokeWidth="1.5" />
      <path d="M28 20L12 20" stroke="#2B80B0" strokeWidth="1.5" />
    </svg>
  );
}

export function BookMarkSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 4H7C6.44772 4 6 4.44772 6 5V20.1315C6 20.9302 6.89014 21.4066 7.5547 20.9635L11.4453 18.3698C11.7812 18.1459 12.2188 18.1459 12.5547 18.3698L16.4453 20.9635C17.1099 21.4066 18 20.9302 18 20.1315V5C18 4.44772 17.5523 4 17 4Z"
        stroke="#2B80B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FilterSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 17L15 17"
        stroke="#2B80B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 12L17 12"
        stroke="#2B80B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 7H19"
        stroke="#2B80B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
