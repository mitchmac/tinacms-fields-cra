export const ContentBlock = {
    label: 'Content',
    key: 'content-block',
    defaultItem: {
        content: 'This is default',
    },
    fields: [{ name: 'content', label: 'Content', component: 'textarea' }],
    itemProps: item => ({
        label: item.content,
    }),
}