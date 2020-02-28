import React from "react";

export default function Cta(props) {

    return (
        <div style={{
            backgroundColor: '#fc5b5b',
            marginTop: 20,
            marginBottom: 20,
            padding: 20,
            borderRadius: 10
        }}>
            <h3>{props.headline}</h3>
            <button>{props.buttonText}</button>
        </div>
    );
}
