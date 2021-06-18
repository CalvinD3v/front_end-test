import React from "react";

function LockIcon(props: any) {
  const { active } = props

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 80 91"
      {...props}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#83BA44" fillRule="nonzero">
          {active == 'Password' && <path d="M79.95 11.1L0 11.1 0 7 34.68 7 39.96 0 45.29 7 79.95 7z"></path>}
          <g transform="translate(14 26)">
            <path fill={active == 'Password' ? "#83BA44" : "#d9d9d9"} d="M45.21 64.08H6.74a6.41 6.41 0 01-6.41-6.41V34.16a6.41 6.41 0 016.41-6.41h38.47a6.41 6.41 0 016.41 6.41v23.51a6.41 6.41 0 01-6.41 6.41zM6.74 32a2.14 2.14 0 00-2.14 2.14v23.53a2.13 2.13 0 002.14 2.13h38.47a2.13 2.13 0 002.14-2.13V34.16A2.14 2.14 0 0045.21 32H6.74z"></path>
            <path fill={active == 'Password' ? "#83BA44" : "#d9d9d9"} d="M43.07 32H8.88a2.14 2.14 0 01-2.14-2.14v-12.8C6.762 7.632 14.412 0 23.84 0h4.27c9.44 0 17.094 7.65 17.1 17.09v12.79A2.14 2.14 0 0143.07 32zM11 27.75h29.93V17.06A12.82 12.82 0 0028.11 4.24h-4.27A12.82 12.82 0 0011 17.06v10.69z"></path>
            <path fill={active == 'Password' ? "#83BA44" : "#d9d9d9"} d="M26 47a4.28 4.28 0 114.28-4.27A4.27 4.27 0 0126 47z"></path>
            <path fill={active == 'Password' ? "#83BA44" : "#d9d9d9"} d="M23.84 44.84H28.11V53.39H23.84z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default LockIcon;