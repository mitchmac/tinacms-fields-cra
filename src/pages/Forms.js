import React from "react";
import {useCMS, useLocalForm} from 'tinacms'
import { Link } from "react-router-dom";

export default function Forms() {
    const cms = useCMS();
    cms.sidebar.hidden = false;

    let content = {
        text: 'We can edit this text in the sidebar!'
    };

    const [page, form] = useLocalForm({
        id: 'edit',
        label: 'Edit',

        initialValues: {
            ...content
        },

        fields: [
            {
                name: 'text',
                label: 'Text',
                component: 'textarea'
            }
        ],

        onSubmit(data, form) {
            alert('Form submitted! Check the console to see the form values.');
            console.clear();
            console.log(data);
        }
    });

    return (
        <>
            <p>{page.text}</p>
            <Link to="/form-fields" style={{display: 'block', marginTop: 60}}>Boring! Let's make the form better</Link>
        </>
    );
}