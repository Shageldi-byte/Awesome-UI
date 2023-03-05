import React from "react";

const Ship = (props) => {
    const fill = props.fill ? props.fill : "black";
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.63 14.66L21.22 16.52C20.51 19.72 18 22 14.38 22H9.62C6 22 3.49 19.72 2.78 16.52L2.37 14.66C2.17 13.75 2.71 12.72 3.58 12.37L5 11.8L10.51 9.58999C10.99 9.39999 11.5 9.29999 12 9.29999C12.5 9.29999 13.01 9.39999 13.49 9.58999L19 11.8L20.42 12.37C21.29 12.72 21.83 13.75 21.63 14.66Z" fill={fill} />
            <path d="M19 8V9.44C19 9.79 18.64 10.04 18.31 9.9L14.04 8.19C12.73 7.68 11.27 7.68 9.95 8.2L5.69 9.91C5.36 10.05 5 9.8 5 9.45V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z" fill={fill} />
            <path d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z" fill={fill} />
        </svg>

    )
}

export default Ship