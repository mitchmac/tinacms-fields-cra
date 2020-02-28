import React from "react";

export default function Cta(props) {

    return (
        <div>
            <h3>{props.headline}</h3>
            <button>{props.buttonText}</button>
        </div>
    );
}
