export default {
    name: 'school',
    title: 'School',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'short',
        title: 'Short',
        type: 'string'
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string'
      },
      {
        name: 'type',
        title: 'Type',
        type: 'string',
        options: {
            list: ['Przedszkole', 'Szkoła podstawowa']
        }
      },
      {
        name: 'location',
        title: 'Location',
        type: 'geopoint'
      }
    ]
  }