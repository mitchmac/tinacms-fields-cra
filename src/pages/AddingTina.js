import React from "react";
import { Link } from "react-router-dom";
import { useCMS } from "tinacms";

export default function AddingTina() {
    const cms = useCMS();
    cms.sidebar.hidden = false;

    return (
        <>
            <p>Tina is an open-source toolkit for React based websites.</p>
            <p>We've added it to this page.</p>
            <p>See the icon on the left?</p>
            <Link to="/forms" style={{display: 'block', marginTop: 60}}>Cool, let's add a form</Link>
        </>
    );
}