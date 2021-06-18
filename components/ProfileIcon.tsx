import React from "react";

function NameIcon(props: any) {
    const { active } = props
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 80 93"
            {...props}
        >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill={active == 'Name' ? "#83BA44" : "#d9d9d9"} fillRule="nonzero">
                    <path d="M37.94 72.44c7.08.63 14-1.67 18.69-7.12a22.48 22.48 0 002.93-24.38c-.24-.48-.5-1-.78-1.42a22 22 0 00-40.54 8.08 22.39 22.39 0 003.46 15.57 21.28 21.28 0 0016.24 9.27zm17.93-13.1c-3.3 5.44-9 9.36-15.46 9.51H40A17.69 17.69 0 0130.25 66c-2.75-1.86-5.75-5.24-4.89-8.81.39-1.64 2.42-4.7 4.47-3.86a7.18 7.18 0 011.5 1c2.74 2 6.84 2.76 10.15 3.16a31.87 31.87 0 0011.39-.64c.73-.18 1.44-.76 2.22-.67a1.66 1.66 0 011.37 1.74 3.44 3.44 0 01-.59 1.42zm-28.2-21.47a18 18 0 0121.56-2.27c5.12 3.08 8.91 8.69 8.77 14.79a3.58 3.58 0 01-1.1 2.82c-1.6 1.27-3.9 1.62-5.9 1.94-2.105.34-4.24.46-6.37.36a30.37 30.37 0 01-12.28-3.24c-1.56-.79-2.89-2-4.49-2.72a6.23 6.23 0 00-.85-.33 9.68 9.68 0 00-.76 1.88c-.44 1.27-2 4.56-3.68 2.47a3.61 3.61 0 01-.6-2.14 18 18 0 015.7-13.56z"></path>
                    <path d="M63.68 69.34c-1-1-2.33-1.9-3.78-1.42a6.26 6.26 0 00-2 1.33 29.65 29.65 0 01-11.45 6c-8.28 2.22-16.55-.39-22.9-6-1.08-1-2.35-1.9-3.87-1.75a6.73 6.73 0 00-2.86 1 7.5 7.5 0 00-.62.43 10.74 10.74 0 00-3.54 6.14 12.67 12.67 0 00-.28 4.71 9.26 9.26 0 004.66 6.87c14.16 8 28.73 8.51 43.4 1.26a14.26 14.26 0 006.4-6.13c2.27-4.19.72-8.48-3.16-12.44zm.13 9.23c-.83 3.67-5.34 6.33-8.52 7.7a34.59 34.59 0 01-11.58 2.52c-.8 0-1.59.08-2.39.09a51.79 51.79 0 01-6.82-.38c-5.8-.71-12-2.18-16.22-6.54a8.26 8.26 0 01-2-3c-.72-2.21.51-4.67 2.24-6.06a2.48 2.48 0 011.14-.58A3.24 3.24 0 0122 73.36c10.772 8.847 26.265 8.947 37.15.24a2 2 0 013.21.35 5.32 5.32 0 011.45 4.62z"></path>
                    {active == 'Name' && <path d="M79.95 11.1L0 11.1 0 7 34.68 7 39.96 0 45.29 7 79.95 7z"></path>}
                </g>
            </g>
        </svg>
    );
}

export default NameIcon;
