import React from "react";

function CalenderIcon(props: any) {
    const { active } = props
    console.log(active)
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 80 89"
            {...props}
        >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fillRule="nonzero">
                    <path
                        fill={active == 'Birthday' ? "#83BA44" : "#d9d9d9"}
                        d="M66 45.8v-4.5a2.52 2.52 0 00-2.51-2.51h-3.9a1.66 1.66 0 00-1.66 1.66v2.63a1.66 1.66 0 01-1.66 1.66h-4.55a1.66 1.66 0 01-1.66-1.66v-2.63a1.66 1.66 0 00-1.66-1.66H31.47a1.65 1.65 0 00-1.65 1.66v2.63a1.66 1.66 0 01-1.66 1.66h-4.55A1.66 1.66 0 0122 43.08v-2.63a1.66 1.66 0 00-1.66-1.66h-3.83A2.52 2.52 0 0014 41.3v45.18A2.52 2.52 0 0016.51 89h47A2.52 2.52 0 0066 86.48V45.8m-4 36.9a2.32 2.32 0 01-2.28 2.3H20.3a2.32 2.32 0 01-2.3-2.3V53.27A2.32 2.32 0 0120.3 51h39.42A2.32 2.32 0 0162 53.27V82.7z"
                    ></path>
                    {active == 'Birthday' &&
                        <path fill="#83BA44" d="M79.95 11.1L0 11.1 0 7 34.68 7 39.96 0 45.29 7 79.95 7z" ></path>
                    }
                    <rect
                        width="4.15"
                        height="9.35"
                        x="23.96"
                        y="33.35"
                        fill={active == 'Birthday' ? "#83BA44" : "#d9d9d9"}
                        rx="1.73"
                    ></rect>
                    <rect
                        width="4.15"
                        height="9.35"
                        x="51.92"
                        y="33.35"
                        fill={active == 'Birthday' ? "#83BA44" : "#d9d9d9"}
                        rx="1.73"
                    ></rect>
                    <rect
                        width="25.92"
                        height="1.22"
                        x="31.81"
                        y="57.46"
                        fill={active == 'Birthday' ? "#83BA44" : "#d9d9d9"}
                        rx="0.35"
                    ></rect>
                    <rect
                        width="6.05"
                        height="6.05"
                        x="21.95"
                        y="55.04"
                        fill={active == 'Birthday' ? "#83BA44" : "#d9d9d9"}
                        rx="0.9"
                    ></rect>
                    <rect
                        width="25.92"
                        height="1.22"
                        x="31.81"
                        y="67.38"
                        fill={active == 'Birthday' ? "#83BA44" : "#d9d9d9"}
                        rx="0.35"
                    ></rect>
                    <rect
                        width="6.05"
                        height="6.05"
                        x="21.95"
                        y="64.96"
                        fill={active == 'Birthday' ? "#83BA44" : "#d9d9d9"}
                        rx="0.9"
                    ></rect>
                    <rect
                        width="25.92"
                        height="1.22"
                        x="31.81"
                        y="77.32"
                        fill={active == 'Birthday' ? "#83BA44" : "#d9d9d9"}
                        rx="0.35"
                    ></rect>
                    <rect
                        width="6.05"
                        height="6.05"
                        x="21.95"
                        y="74.9"
                        fill={active == 'Birthday' ? "#83BA44" : "#d9d9d9"}
                        rx="0.9"
                    ></rect>
                </g>
            </g>
        </svg>
    );
}

export default CalenderIcon;
