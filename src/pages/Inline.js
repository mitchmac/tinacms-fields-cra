import React from "react";
import ReactMarkdown from 'react-markdown'
import {useLocalForm, Wysiwyg} from 'tinacms'
import { InlineForm, InlineField } from 'react-tinacms-inline'
import InlineToggle from "../fields/InlineToggle.js";


export default function Inline() {
    const [, form] = useLocalForm({
        id: 'edit',
        label: 'Edit',

        initialValues: {
            title: 'This is the page title',
            body: 'Hello!'
        },

        fields: [
            {
                name: 'title',
                label: 'Title',
                component: 'text'
            },
            {
                name: 'body',
                label: 'Text',
                component: 'markdown'
            },
        ],

        onSubmit(data, form) {
            alert('Form submitted! Check the console to see the form values.');
            console.clear();
            console.log(data);
        }
    });

    return (
        <>
            <InlineForm form={form}>
                    <InlineField name="title">
                        {
                            ({input, status}) => {
                                if (status === 'active') {
                                    return <div style={{marginBottom: 20}}><label style={{marginRight: 20}}>Title:</label><input type='text' {...input}/></div>
                                }
                                return <h2 className="title is-2">{input.value}</h2>
                            }
                        }
                    </InlineField>
                    <InlineField name="body">
                        {
                            ({input, status}) => {
                                if (status === 'active') {
                                    return <Wysiwyg input={input} />
                                }
                                return <ReactMarkdown source={input.value} />
                            }
                        }
                    </InlineField>

                <div style={{marginTop: 40}}>
                    <InlineToggle/>
                </div>
            </InlineForm>
        </>
    );
}
