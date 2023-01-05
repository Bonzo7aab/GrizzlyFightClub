export default {
    name: 'camp',
    title: 'Camp',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'place',
        title: 'Place',
        type: 'string'
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{type: 'image'}]
      }
    ]
  }