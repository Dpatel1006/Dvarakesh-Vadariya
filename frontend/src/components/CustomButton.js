import React from "react";
import { Button, Spinner } from "react-bootstrap";

const CustomButton = ({
    text = "Click Me",
    variant = "primary",
    size = "md",
    onClick = () => { },
    iconStart = null,
    iconEnd = null,
    className = "",
    type = "button",
    disabled = false,
    loading = false,
}) => {
    return (
        <Button
            type={type}
            variant={variant}
            size={size}
            onClick={onClick}
            disabled={disabled || loading}
            className={`d-flex align-items-center gap-2 ${className}`}
        >
            {loading && <Spinner animation="border" size="sm" />}
            {!loading && iconStart}
            {!loading && text}
            {!loading && iconEnd}
        </Button>
    );
};

export default CustomButton;
