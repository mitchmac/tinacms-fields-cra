import React from "react";
import {useCMS, useLocalForm, useGlobalForm } from 'tinacms'
import { Link } from "react-router-dom";

export default function GlobalForms() {
    const cms = useCMS();
    cms.sidebar.hidden = false;

    const [_, globalForm] = useGlobalForm({
        id: 'site',
        label: 'Edit Site Settings',

        initialValues: {
            siteTitle: 'Hello Tina'
        },

        fields: [
            {
                name: 'text',
                label: 'Text',
                component: 'text'
            }
        ],

        onSubmit(data, form) {
            alert('Form submitted! Check the console to see the form values.');
            console.clear();
            console.log(data);
        }
    });

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