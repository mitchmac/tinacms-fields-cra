import React from "react";
import {useCMS, useLocalForm} from 'tinacms'
import { Link } from "react-router-dom";
import { LocationFormBlock, CTAFormBlock } from '../fields/Blocks.js';
import Location from '../components/Location.js';
import Cta from '../components/Cta.js';

export default function Blocks() {
    const cms = useCMS();
    cms.sidebar.hidden = false;

    let content = {
        blocks: [
            {city: 'San Francisco', lat: 37.77493, lon:-122.41942, zoom: 12, '_template': 'LocationFormBlock'},
            {headline: 'New Product Launch', buttonText: 'Subscribe now', '_template': 'CTAFormBlock' },
            {city: 'Toronto', lat: 43.70011, lon: -79.4163, zoom: 12,  '_template': 'LocationFormBlock'}
        ],
    };

    const [page, form] = useLocalForm({
        id: 'edit',
        label: 'Edit',

        initialValues: {
            ...content
        },

        fields: [
            {
                label: 'Location Landing Page',
                name: 'blocks',
                component: 'blocks',
                templates: {
                    LocationFormBlock,
                    CTAFormBlock
                },
            },
        ],

        onSubmit(data, form) {
            alert('Form submitted! Check the console to see the form values.');
            console.clear();
            console.log(data);
        }
    })

    return (
        <>
            <p>Blocks can be used edit structured content of mixed types. Each can be edited, reordered, or deleted.</p>
            {page.blocks &&
            page.blocks.map(({ _template, ...data }, i) => {
                switch (_template) {
                    case 'LocationFormBlock':
                        return ( <Location key={i} {...data} /> );
                    case 'CTAFormBlock':
                        return ( <Cta key={i} {...data} /> );
                    default:
                        return true
                }
            })}
        </>
    );
}