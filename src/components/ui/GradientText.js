
import PropTypes from "prop-types";
import React from "react";

export default function GradientText({ children, className = "" }) {
    return (
        <span
            className={`bg-gradient-to-r from-blue-500 via-purple-200 to-pink-300 text-transparent bg-clip-text ${className}`}
        >
            {children}
        </span>
    );
}

// Optional: Runtime prop validation
GradientText.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
