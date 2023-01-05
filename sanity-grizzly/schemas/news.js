
export default {
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'short',
            title: 'Short description',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        }
    ]
  }