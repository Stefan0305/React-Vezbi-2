import React from "react";

function Button(props) {

    console.log(props)

    function selectColor(value) {
        return value === "primary" ? "blue" : value === "secondary" ? "gray" : "yellow";
    }

    function selectSize(value) {
        return value === "sm" ? "12px"
            : value === "md" ? "16px"
                : value === "lg" ? "20px" : null;
    }

    function setPadding(value) {
        return value === "sm" ? "10px"
            : value === "md" ? "20px"
                : value === "lg" ? "30px" : null;
    }

    return <button style={{
        backgroundColor: selectColor(props.variant),
        fontSize: selectSize(props.size),
        padding: setPadding(props.size),
        borderRadius: props.rounded ? "10px" : "none",
    }} >
        {props.text}
    </button>
}

Button.defaultProps = {
    variant: "primary",
    size: "sm",
    text: "Button"
}



export default Button;