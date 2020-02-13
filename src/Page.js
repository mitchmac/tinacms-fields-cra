import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useCMS, useLocalForm } from 'tinacms';

export default function Page() {
    useCMS();

    let rawPage = {
        title: 'This is a page title',
        body: 'This is a page body',
    };

    const [post, form] = useLocalForm({
        id: 'foo',
        label: 'Edit Page',

        initialValues: {
            title: rawPage.title,
            markdownBody: rawPage.body
        },

        fields: [
            {
                name: 'title',
                label: 'Title',
                component: 'text'
            },
            {
                name: 'markdownBody',
                label: 'Body',
                component: 'markdown'
            }
        ],

        onSubmit(data, form) {
            alert('Form submitted!');
        }
    });

    return (
        <div>
            <h2>{post.title}</h2>
            <ReactMarkdown source={post.markdownBody}/>
        </div>
    );
}