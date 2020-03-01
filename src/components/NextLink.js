import React from "react";
import { Link } from "react-router-dom";

export default function NextLink(props) {
    return (
        <Link to={props.to} className="is-size-4" style={{display: 'block', marginTop: 60}}>{props.children}</Link>
    );
}