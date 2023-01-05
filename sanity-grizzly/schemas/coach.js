export default {
    name: 'coach',
    title: 'Coach',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string'
      },
      {
        name: 'experience',
        title: 'Experience',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image'
      }
    ]
  }